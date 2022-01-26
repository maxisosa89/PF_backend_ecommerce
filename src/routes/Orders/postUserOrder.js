const { Cart, Users, Order, Product, Details } = require("../../db");
const Stripe = require("stripe");
require('dotenv').config();
const { STRIPE_CONN } = process.env;
const stripe = new Stripe(STRIPE_CONN);


const postUserOrder = async (req, res, next) => {
  
  const { UserId } = req.params;
  const { address, totalPrice, email, id, productsInfo } = req.body;
  
  try {
    
    let idProduct = productsInfo.map((el) => el.idProduct)
    let user = await Users.findByPk(UserId);
        
    if(!user.address) {
      await user.update({ address })
    }

    // Creo la orden de compra:
    let order = await Order.create(
      {
        address,
        status: "created",
        totalPrice
      }
    );
    
    // Relacion orden-usuario:
    await user.addOrder(order);
    await order.setUser(user);

    // Se obtienen los productos que se compran:
    let products = await Product.findAll(
      {
        where: { idProduct }
      }
    );

    // Se agregan los productos a la orden:
    await order.addProducts(products);

    // Se buscan productos desde la tabla Details correspondientes a la orden para actualizar la cantidad:
    let orderProducts = await Details.findAll(
      {
        where: { OrderId: order.idOrder }
      }
    );

    // Se actualiza la cantidad correspondiente de cada producto en la orden:
    let availableProducts = [];
    
    for(let i = 0; i < productsInfo.length; i++) {
      // Se busca uno de los productos: 
      let product = orderProducts.find((el) => el.ProductId === productsInfo[i].idProduct);

      // Se busca el producto correspondiente de la base de datos (se reduce el stock luego de la compra):
      let databaseProduct = products.find((el) => el.idProduct === product.ProductId);

      if(databaseProduct.stock >= productsInfo[i].amount) {
        // Si el producto tiene stock para permitir la compra, entonces sigo analizando y lo guardo para modificarlo una vez que me asegure que la orden de compra se puede hacer,
        availableProducts.push(
          { 
            databaseProduct, 
            product, 
            amount: productsInfo[i].amount, 
            price: productsInfo[i].price 
          }
        );
      
      } else {
        // Si no, envío un error avisando que no hay suficiente cantidad de dicho producto
        return res.status(400).json(
          {
            message:`There are only ${databaseProduct.stock} ${databaseProduct.name} left. You must modify your cart's amount. Try again later`
          }
        )
      }
    };

    // Se actualizan los stocks y las cantidades de productos de la orden.
    for(let i = 0; i < availableProducts.length; i++) {
      let {
        databaseProduct, 
        product, 
        amount, 
        price 
      } = availableProducts[i];
      
      await databaseProduct.update(
        {
          stock: databaseProduct.stock - amount, 
          sold_quantity: databaseProduct.sold_quantity + amount
        }
      );
      
      await product.update(
        {
          amount, 
          price
        }
      )
    };
    
    // Gestion de la compra con stripe
    const payment = await stripe.paymentIntents.create(
      {
        amount: Math.round(totalPrice * 100), // TODO: 1 peso 100 centavos
        currency: "Ars",
        description: `User Email: ${email}`, // TODO: AGREGAR NOMBRE Y APELLIDO, CON FECHA DE COMPRA Y CANTIDAD DE ITEMS
        receipt_email: email,
        payment_method: id,
        payment_method_types: ['card'],
        confirm: true, // Confirm the payment at the same time of created the transaction
      }
    );

    if(payment.status) {
      await order.update({ status:"completed" })
    };

    let codehtml = ShopConfirm(productsInfo, totalPrice, address);
    SendEmails(email, 'Confirmación de compra', codehtml);

    return res.status(200).json(
      {
        user, 
        order, 
        orderProducts
      }
    );

  } catch (error) {
    console.log("/Users/order/:UserId: ", error);
    
    if(error.statusCode === 402) {
      await Order.update({ status: "rejected" })
      return res.status(error.statusCode).json({ msg: `${error.code} ${error.status}` })
    }
    
    next(error)
  }
};


module.exports = {
  postUserOrder
};