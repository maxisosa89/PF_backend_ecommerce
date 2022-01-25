const router = require("express").Router();
const { Categories } = require("../../db.js");

const getCategories = async (req, res) => {
    let cat = await Categories.findAll();
    if (cat.length === 0){
        const data = [
            {name: "Women Clothing", active: true, img:"https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/1-370x497.jpg"},
            {name: "Men Clothing", active: true, img:"https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/13-370x497.jpg"},
            {name: "Dresses", active: true, img:"https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/18_4-370x497.jpg"},
            {name: "Jeans", active: true, img:"https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/4_3-370x497.jpg"},
            {name: "Shoes", active: true, img:"https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/2-370x497.jpg"},
            {name: "Lingerie", active: true, img:"https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/14_1-370x497.jpg"}]
        cat = await Categories.bulkCreate(data);
    }
    res.json(cat);
};

module.exports = { getCategories };
