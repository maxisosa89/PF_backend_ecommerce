//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const data = require('./src/data.json')
const{Product} = require('./src/db')
const{Categories} = require('./src/db')

// Syncing all the models at once.
conn.sync({ 
  force: true 
}).then(() => {
  server.listen(3001, async () => {
    console.log('%s listening at 3001');
    try{
      const allProducts = data[0].map((p)=>({
        name:p.name,
        price:p.price,
        soldQty:p.soldQty,
        img:p.img,
        description:p.description,
        aditionalInformation:p.aditionalInformation,
        stock:p.sotck
      }))

      const allCategories = data[1].map((c)=>({
        name:c.name,
        active:c.active,
        img:c.img
      }))

      await Product.bulkCreate(allProducts)
      await Categories.bulkCreate(allCategories)
      return(allProducts)
    } catch(e){
      console.log(e)
    }// eslint-disable-line no-console
  });
});
