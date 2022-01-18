const router = require('express').Router();
const { Product } = require('../db.js');

router.get('/', async (req, res) => {
    
    res.json([
        {
            id: 1,
            name: "Baheera’s Winter Jacket",
            price: "45",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21_4-370x497.jpg",
            category: "Shoes"
        },
        {
            id: 2,
            name: "Grey’s Metal Belt",
            price: "56",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/9_4-370x497.jpg",
            category: "Shoes"
        },
        {
            id: 3,
            name: "Knitted Gloves Turquoise",
            price: "124",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/19_4-370x497.jpg",
            category: "Shoes"
        },
        {
            id: 4,
            name: "One-piece suit",
            price: "90",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/4_4-370x497.jpg",
            category: "Shoes"
        },
        {
            id: 5,
            name: "YLD Solid Bandana Blue Camo",
            price: "123",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/17_4-370x497.jpg",
            category: "Shoes"
        },
        {
            id: 6,
            name: "Crosshatch Squinch Belt Vaporous Grey",
            price: "66",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/14_1-370x497.jpg",
            category: "Jeans"
        },
        {
            id: 7,
            name: "Groove Shades Single Pink",
            price: "123",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/11-370x497.jpg",
            category: "Jeans"
        },
        {
            id: 8,
            name: "Knitted Gloves Turquoise",
            price: "124",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/19_4-370x497.jpg",
            category: "Jeans"
        },
        {
            id: 9,
            name: "Longline Cardigan",
            price: "123",
            img: "Longline Cardigan",
            category: "Jeans"
        },
        {
            id: 10,
            name: "Men’s Shorts",
            price: "45",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/2_3-370x497.jpg",
            category: "Jeans"
        },
        {
            id: 11,
            name: "Crescent Bay Wallet Grey",
            price: "99",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/13-370x497.jpg",
            category: "Dresses"
        },
        {
            id: 12,
            name: "Crosshatch Squinch Belt Vaporous Grey",
            price: "66",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/14_1-370x497.jpg",
            category: "Dresses"
        },
        {
            id: 13,
            name: "Groove Shades Single Pink",
            price: "123",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/11-370x497.jpg",
            category: "Dresses"
        },
        {
            id: 14,
            name: "Jeans shorts",
            price: "44",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/8_3-370x497.jpg",
            category: "Dresses"
        },
        {
            id: 15,
            name: "Knitted Gloves Turquoise",
            price: "124",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/19_4-370x497.jpg",
            category: "Dresses"
        },
        {
            id: 16,
            name: "Mi-Pac Peruvian Stripe Backpack",
            price: "76",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/15_4-370x497.jpg",
            category: "Dresses"
        },
        {
            id: 17,
            name: "Grey’s Metal Belt",
            price: "56",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/9_4-370x497.jpg",
            category: "Women Clothing"
        },
        {
            id: 18,
            name: "Groove Shades Single Pink",
            price: "123",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/11-370x497.jpg",
            category: "Women Clothing"
        },
        {
            id: 19,
            name: "Jeans shorts",
            price: "44",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/8_3-370x497.jpg",
            category: "Women Clothing"
        },
        {
            id: 20,
            name: "Knitted Gloves Turquoise",
            price: "124",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/19_4-370x497.jpg",
            category: "Women Clothing"
        },
        {
            id: 21,
            name: "Longline Cardigan",
            price: "123",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/16-370x497.jpg",
            category: "Women Clothing"
        },
        {
            id: 22,
            name: "Mi-Pac Peruvian Stripe Backpack",
            price: "76",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/15_4-370x497.jpg",
            category: "Women Clothing"
        },
        {
            id: 23,
            name: "Occasional dress",
            price: "66",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/3_4-370x497.jpg",
            category: "Women Clothing"
        },
        {
            id: 24,
            name: "Pencil Dress",
            price: "123",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/18_4-370x497.jpg",
            category: "Women Clothing"
        },
        {
            id: 25,
            name: "Baheera’s Winter Jacket",
            price: "45",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21_4-370x497.jpg",
            category: "Men Clothing"
        },
        {
            id: 26,
            name: "Crescent Bay Wallet Grey",
            price: "99",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/13-370x497.jpg",
            category: "Men Clothing"
        },
        {
            id: 27,
            name: "Men’s Shorts",
            price: "45",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/2_3-370x497.jpg",
            category: "Men Clothing"
        },
        {
            id: 28,
            name: "White shirt",
            price: "55",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/5-370x497.jpg",
            category: "Men Clothing"
        },
        {
            id: 29,
            name: "Knitted Gloves Turquoise",
            price: "124",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/19_4-370x497.jpg",
            category: "Lingerie"
        },
        {
            id: 30,
            name: "Longline Cardigan",
            price: "123",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/16-370x497.jpg",
            category: "Lingerie"
        },
    ])
});


module.exports = router;