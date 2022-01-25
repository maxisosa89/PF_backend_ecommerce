const router = require("express").Router();
const { Product } = require("../db.js");


router.get('/', async (req, res) => {
    
    res.json([
        {
            id: 1,
            name: "Baheera’s Winter Jacket",
            price: "45",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21_4-370x497.jpg",
            category: "Shoes",  
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 2,
            name: "Grey’s Metal Belt",
            price: "56",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/9_4-370x497.jpg",
            category: "Shoes",
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 3,
            name: "Knitted Gloves Turquoise",
            price: "124",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/19_4-370x497.jpg",
            category: "Shoes",
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 4,
            name: "One-piece suit",
            price: "90",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/4_4-370x497.jpg",
            category: "Shoes",
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 5,
            name: "YLD Solid Bandana Blue Camo",
            price: "123",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/17_4-370x497.jpg",
            category: "Shoes",
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 6,
            name: "Crosshatch Squinch Belt Vaporous Grey",
            price: "66",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/14_1-370x497.jpg",
            category: "Jeans",
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 7,
            name: "Groove Shades Single Pink",
            price: "123",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/11-370x497.jpg",
            category: "Jeans",
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",            
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 8,
            name: "Knitted Gloves Turquoise",
            price: "124",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/19_4-370x497.jpg",
            category: "Jeans",
            detail:{
               color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 9,
            name: "Longline Cardigan",
            price: "123",
            img: "Longline Cardigan",
            category: "Jeans",
            detail:{
               color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 10,
            name: "Men’s Shorts",
            price: "45",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/2_3-370x497.jpg",
            category: "Jeans",
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 11,
            name: "Crescent Bay Wallet Grey",
            price: "99",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/13-370x497.jpg",
            category: "Dresses",
            detail:{
               color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 12,
            name: "Crosshatch Squinch Belt Vaporous Grey",
            price: "66",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/14_1-370x497.jpg",
            category: "Dresses",
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 13,
            name: "Groove Shades Single Pink",
            price: "123",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/11-370x497.jpg",
            category: "Dresses",
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 14,
            name: "Jeans shorts",
            price: "44",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/8_3-370x497.jpg",
            category: "Dresses",
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 15,
            name: "Knitted Gloves Turquoise",
            price: "124",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/19_4-370x497.jpg",
            category: "Dresses",
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 16,
            name: "Mi-Pac Peruvian Stripe Backpack",
            price: "76",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/15_4-370x497.jpg",
            category: "Dresses",
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 17,
            name: "Grey’s Metal Belt",
            price: "56",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/9_4-370x497.jpg",
            category: "Women Clothing",
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 18,
            name: "Groove Shades Single Pink",
            price: "123",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/11-370x497.jpg",
            category: "Women Clothing",
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 19,
            name: "Jeans shorts",
            price: "44",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/8_3-370x497.jpg",
            category: "Women Clothing",
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 20,
            name: "Knitted Gloves Turquoise",
            price: "124",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/19_4-370x497.jpg",
            category: "Women Clothing",
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 21,
            name: "Longline Cardigan",
            price: "123",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/16-370x497.jpg",
            category: "Women Clothing",
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 22,
            name: "Mi-Pac Peruvian Stripe Backpack",
            price: "76",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/15_4-370x497.jpg",
            category: "Women Clothing",
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 23,
            name: "Occasional dress",
            price: "66",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/3_4-370x497.jpg",
            category: "Women Clothing",
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 24,
            name: "Pencil Dress",
            price: "123",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/18_4-370x497.jpg",
            category: "Women Clothing",
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 25,
            name: "Baheera’s Winter Jacket",
            price: "45",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21_4-370x497.jpg",
            category: "Men Clothing",
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 26,
            name: "Crescent Bay Wallet Grey",
            price: "99",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/13-370x497.jpg",
            category: "Men Clothing",
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 27,
            name: "Men’s Shorts",
            price: "45",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/2_3-370x497.jpg",
            category: "Men Clothing",
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 28,
            name: "White shirt",
            price: "55",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/5-370x497.jpg",
            category: "Men Clothing",
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 29,
            name: "Knitted Gloves Turquoise",
            price: "124",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/19_4-370x497.jpg",
            category: "Lingerie",
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
        {
            id: 30,
            name: "Longline Cardigan",
            price: "123",
            img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/16-370x497.jpg",
            category: "Lingerie",
            detail:{
                color:"white",
                size:"M",
                clothType:"cotton",
            },
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
            additionalInformation: [
                {
                    manufacturer: "Germany",
                    fit: "Skinny Fit",
                    lining_material: "Nylon",
                    Occasion: "Casual"
                }
            ],
            description: "While the Baheera brand is well-known in the US thanks to it jeans denim items, recently it also rolled out a vast variety of jackets, coats, and other apparel."
        },
    ])

});

module.exports = router;
