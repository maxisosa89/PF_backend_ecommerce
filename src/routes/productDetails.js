/*
US 9 - (DETAILS) renderizar los datos como foto como imagen respectiva, 
descripción del producto, reviews
https://www.templatemonsterpreview.com/demo/59038.html?_gl=1*y3buf6*_ga*MTQyNTYyMzU2NC4xNjQyMjA2MjM4*_ga_FTPYEGT5LY*MTY0MjIwNjIzNy4xLjAuMTY0MjIwNjIzOC41OQ..&_ga=2.110837957.1985839904.1642206238-1425623564.1642206238
*/


const router = require('express').Router();
const { Product } = require('../db.js');


router.get('/', async (req, res) => {
    
    res.json(
        {
        
            id: 1,

            images: [
                {
                    img1: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21_4-470x632.jpg"
                },
                {
                    img2: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21_3-470x632.jpg"
                },
                {
                    img3: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21_2-470x632.jpg"
                },
                {
                    img4: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21-470x632.jpg"
                }    
            ],

            name: "Baheera’s Winter Jacket",
        
            type: "Shoes",

            price: "$45.00",

            size: [
              {
                id: 1,
                name: "XS",
                qty: 0,
              },
              {
                id:2,
                name: "S",
                qty: 0
              },
              {
                id:3,
                name: "M",
                qty: 0
              },
              {
                id:4,
                name: "L",
                qty: 0
              },
              {
                id:5,
                name: "XL",
                qty: 0
              },
              {
                id:6,
                name: "XXL",
                qty: 0
              },
            ],
        
            reviews: [
                {
                    usuario: "Nacho", 
                    timestamps: "13-05-21", 
                    comment: "Muy buena!!"
                },
                {
                    usuario: "Jona", 
                    timestamps: "3-1-22", 
                    comment: "Exelente!"
                },            
                {
                    usuario: "Maxi", 
                    timestamps: "24-8-21", 
                    comment: "No te queda en negro?"
                }
            ],

            additional_information: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    occasion: "Casual"
                }
            ],
        
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
    
        }
    ) 
});


module.exports = router;