// vestidos, blusas, camisetas, shor

const categorias = [
  {
    name: "Blusas",
    active: true,
    img: "https://image.freepik.com/foto-gratis/chica-adolescente-alegre-rastas-dientes-dorados-hace-gesto-paz-o-victoria-hace-graffiti-aerosol-vestida-ropa-moda_273609-47516.jpg",
  },
  {
    name: "Camisetas",
    active: true,
    img: "https://image.freepik.com/foto-gratis/vista-posterior-persona-pie-delante-pared-graffiti-botella-spray_23-2147827678.jpg",
  },
  {
    name: "Vestidos",
    active: true,
    img: "https://image.freepik.com/foto-gratis/mujer-pie-rainbow-village-taichung-taiwan_335224-610.jpg",
  },
  {
    name: "Pantalones",
    active: true,
    img: "https://image.freepik.com/foto-gratis/mujer-tiro-completo-posando-graffiti_23-2149028824.jpg",
  },
];

const pants = [
  {
    name: "Jean Array Lady",
    img: [
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/14_1.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/14_3.jpg",
    ],
    price: 66000,
    ranking: Math.round(Math.random() * 5),
    description:
      "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
    additionalInformation: {
      manufacturer: "Alemania",
      material: "Jean",
      occasion: "Casual",
      fit: "Straight",
      lining_material: "Jean",
    },
    stock: {
      xs: 0,
      s: 7,
      m: 0,
      l: 6,
      xl: 6,
      xxl: 5,
    },
  },
  {
    name: "Jean Array Men",
    img: [
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/13.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/13_3.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/13_2.jpg",
    ],
    price: 99000,
    ranking: Math.round(Math.random() * 5),
    description:
      "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
    additionalInformation: {
      manufacturer: "China",
      material: "Atlas",
      occasion: "Casual",
      fit: "Slim Fit",
      lining_material: "Jean",
    },
    stock: {
      xs: 6,
      s: 6,
      m: 0,
      l: 1,
      xl: 9,
      xxl: 0,
    },
  },
  {
    name: "Bermuda",
    img: [
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21_4.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21_3.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21_2.jpg",
    ],
    price: 46000,
    ranking: Math.round(Math.random() * 5),
    description:
      "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
    additionalInformation: {
      manufacturer: "China",
      material: "Atlas",
      occasion: "Casual",
      fit: "Skinny Fit",
      lining_material: "Jean",
    },
    stock: {
      xs: 1,
      s: 6,
      m: 6,
      l: 4,
      xl: 3,
      xxl: 9,
    },
  },
  {
    name: "Short blanco",
    img: [
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/11.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/11_2.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/11_4.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/11_3.jpg",
    ],
    price: 123000,
    ranking: Math.round(Math.random() * 5),
    description:
      "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
    additionalInformation: {
      manufacturer: "Japón",
      material: "Cotton",
      occasion: "Comfort",
      fit: "Straight",
      lining_material: "Cotton",
    },
    stock: {
      xs: 1,
      s: 6,
      m: 6,
      l: 4,
      xl: 3,
      xxl: 9,
    },
  },
  {
    name: "Bermuda Playa",
    img: [
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/17_4.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/17_2.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/17.jpg",
    ],
    price: 125000,
    ranking: Math.round(Math.random() * 5),
    description:
      "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
    additionalInformation: {
      manufacturer: "Argentina",
      material: "Lino",
      occasion: "Cocktail",
      fit: "Straight",
      lining_material: "Lino",
    },
    stock: {
      xs: 7,
      s: 4,
      m: 3,
      l: 2,
      xl: 1,
      xxl: 7,
    },
  },
  {
    name: "Mini Short",
    img: [
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/16.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/16_2.jpg",
    ],
    price: 119000,
    ranking: Math.round(Math.random() * 5),
    description:
      "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
    additionalInformation: {
      manufacturer: "Brasil",
      material: "Jean",
      occasion: "Night",
      fit: "Straight",
      lining_material: "Jean",
    },
    stock: {
      xs: 5,
      s: 10,
      m: 3,
      l: 2,
      xl: 7,
      xxl: 8,
    },
  },
];

const vestidos = [
  {
    name: "Vestido camuflaje",
    img: [
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/19_4.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/19_3.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/19_2.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/19.jpg",
    ],
    price: 124000,
    ranking: Math.round(Math.random() * 5),
    description:
      "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
    additionalInformation: {
      manufacturer: "Alemania",
      material: "Polyester",
      occasion: "Casual",
      fit: "Slim Fit",
      lining_material: "Algodón",
    },
    stock: {
      xs: 2,
      s: 7,
      m: 1,
      l: 6,
      xl: 9,
      xxl: 2,
    },
  },
  {
    name: "Pencil Dress",
    img: [
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/18_4.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/18_3.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/18.jpg",
    ],
    price: 123000,
    ranking: Math.round(Math.random() * 5),
    description:
      "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
    additionalInformation: {
      manufacturer: "Japón",
      material: "Polyester",
      occasion: "Casual",
      fit: "Skinny Fit",
      lining_material: "Nylon",
    },
    stock: {
      xs: 2,
      s: 3,
      m: 4,
      l: 7,
      xl: 1,
      xxl: 4,
    },
  },
  {
    name: "Fiesta dress",
    img: [
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/10_4.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/10_2.jpg",
    ],
    price: 154000,
    ranking: Math.round(Math.random() * 5),
    description:
      "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
    additionalInformation: {
      manufacturer: "China",
      material: "Polyester",
      occasion: "Fiesta",
      fit: "Slim Fit",
      lining_material: "Algodón",
    },
    stock: {
      xs: 1,
      s: 3,
      m: 3,
      l: 2,
      xl: 1,
      xxl: 6,
    },
  },
  {
    name: "Rojo fuego",
    img: [
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/15_4.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/15_3.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/15.jpg",
    ],
    price: 76000,
    ranking: Math.round(Math.random() * 5),
    description:
      "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
    additionalInformation: {
      manufacturer: "China",
      material: "Lino",
      occasion: "Fiesta",
      fit: "Straigth",
      lining_material: "Nylon",
    },
    stock: {
      xs: 8,
      s: 10,
      m: 4,
      l: 3,
      xl: 3,
      xxl: 9,
    },
  },
  {
    name: "Ocasional Dress",
    img: [
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/3_4.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/3_3.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/3_2.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/3.jpg",
    ],
    price: 78000,
    ranking: Math.round(Math.random() * 5),
    description:
      "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
    additionalInformation: {
      manufacturer: "China",
      material: "Algodón",
      occasion: "Casual",
      fit: "Straigth",
      lining_material: "Nylon",
    },
    stock: {
      xs: 8,
      s: 1,
      m: 8,
      l: 1,
      xl: 5,
      xxl: 1,
    },
  },
];

// camisetas

const blusas = [
  {
    name: "Lok Deslumbra",
    img: [
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/11-470x632.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/11_2-470x632.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/11_3-470x632.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/11_4-470x632.jpg",
    ],
    price: 98000,
    ranking: Math.round(Math.random() * 5),
    description: "Si te lo crees la magia surge por sí sola, solo créetelo",
    additionalInformation: {
      manufacturer: "Lok",
      material: "poliéster",
      occasion: "rural",
      fit: "no",
      lining_material: "polialgodón",
    },
    stock: {
      xs: 0,
      s: 0,
      m: 0,
      l: 0,
      xl: 0,
      xxl: 0,
    },
  },
  {
    name: "Silueta Militar",
    img: [
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/19_4-470x632.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/19_3.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/19_2-470x632.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/19-470x632.jpg",
    ],
    price: 98000,
    ranking: Math.round(Math.random() * 5),
    description: "Si te lo crees la magia surge por sí sola, solo créetelo",
    additionalInformation: {
      manufacturer: "Lok",
      material: "poliéster",
      occasion: "rural",
      fit: "no",
      lining_material: "polialgodón",
    },
    stock: {
      xs: 2,
      s: 2,
      m: 10,
      l: 1,
      xl: 9,
      xxl: 2,
    },
  },
  {
    name: "La wayú",
    img: [
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/16-470x632.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/16_4-470x632.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/16_3-470x632.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/16_2-470x632.jpg",
    ],
    price: 137000,
    ranking: Math.round(Math.random() * 5),
    description: "Si te lo crees la magia surge por sí sola, solo créetelo",
    additionalInformation: {
      manufacturer: "Lok",
      material: "poliéster",
      occasion: "rural",
      fit: "no",
      lining_material: "polialgodón",
    },
    stock: {
      xs: 4,
      s: 2,
      m: 7,
      l: 1,
      xl: 10,
      xxl: 3,
    },
  },
  {
    name: "Mono Jean",
    img: [
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/4_4-470x632.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/4_3-470x632.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/4_2-470x632.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/4-470x632.jpg",
    ],
    price: 154000,
    ranking: Math.round(Math.random() * 5),
    description: "Si te lo crees la magia surge por sí sola, solo créetelo",
    additionalInformation: {
      manufacturer: "Lok",
      material: "poliéster",
      occasion: "rural",
      fit: "no",
      lining_material: "polialgodón",
    },
    stock: {
      xs: 6,
      s: 9,
      m: 3,
      l: 3,
      xl: 3,
      xxl: 3,
    },
  },
  {
    name: "La florida",
    img: [
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/20_3-470x632.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/20_4-470x632.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/20-470x632.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/20_4-470x632.jpg",
    ],
    price: 154000,
    ranking: Math.round(Math.random() * 5),
    description: "Si te lo crees la magia surge por sí sola, solo créetelo",
    additionalInformation: {
      manufacturer: "Lok",
      material: "poliéster",
      occasion: "rural",
      fit: "no",
      lining_material: "polialgodón",
    },
    stock: {
      xs: 6,
      s: 9,
      m: 3,
      l: 3,
      xl: 3,
      xxl: 3,
    },
  },
  {
    name: "Mix abrebocas",
    img: [
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/6-470x632.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/6_4-470x632.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/6_3-470x632.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/6_2-470x632.jpg",
    ],
    price: 113000,
    ranking: Math.round(Math.random() * 5),
    description: "Si te lo crees la magia surge por sí sola, solo créetelo",
    additionalInformation: {
      manufacturer: "Lok",
      material: "poliéster",
      occasion: "rural",
      fit: "no",
      lining_material: "polialgodón",
    },
    stock: {
      xs: 7,
      s: 2,
      m: 1,
      l: 1,
      xl: 10,
      xxl: 1,
    },
  },
  {
    name: "Rompe code",
    img: [
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/1-470x632.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/1_4-470x632.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/1_3-470x632.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/1_2-470x632.jpg",
    ],
    price: 113000,
    ranking: Math.round(Math.random() * 5),
    description: "Si te lo crees la magia surge por sí sola, solo créetelo",
    additionalInformation: {
      manufacturer: "Lok",
      material: "poliéster",
      occasion: "rural",
      fit: "no",
      lining_material: "polialgodón",
    },
    stock: {
      xs: 5,
      s: 0,
      m: 10,
      l: 6,
      xl: 8,
      xxl: 3,
    },
  },
];

const camisetas = [
  {
    name: "Rompe calles",
    img: [
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/13.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/13_4.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/13_3.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/13_2.jpg",
    ],
    price: 108000,
    ranking: Math.round(Math.random() * 5),
    description:
      "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
    additionalInformation: {
      manufacturer: "Lok",
      material: "poliéster",
      occasion: "rural",
      fit: "no",
      lining_material: "polialgodón",
    },
    stock: {
      xs: 6,
      s: 9,
      m: 3,
      l: 3,
      xl: 3,
      xxl: 3,
    },
  },
  {
    name: "Aves y aves",
    img: [
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21_4-470x632.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21_3-470x632.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21_2-470x632.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21-470x632.jpg",
    ],
    price: 108000,
    ranking: Math.round(Math.random() * 5),
    description: "Camisa disfrazada de camiseta",
    additionalInformation: {
      manufacturer: "Lok",
      material: "poliéster",
      occasion: "rural",
      fit: "no",
      lining_material: "polialgodón",
    },
    stock: {
      xs: 6,
      s: 9,
      m: 3,
      l: 3,
      xl: 3,
      xxl: 3,
    },
  },
  {
    name: "Playeron",
    img: [
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/2_3-470x632.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/2_4-470x632.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/2_2-470x632.jpg",
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/2-470x632.jpg",
    ],
    price: 108000,
    ranking: Math.round(Math.random() * 5),
    description: "Camisa disfrazada de camiseta",
    additionalInformation: {
      manufacturer: "Lok",
      material: "poliéster",
      occasion: "rural",
      fit: "no",
      lining_material: "polialgodón",
    },
    stock: {
      xs: 6,
      s: 9,
      m: 3,
      l: 3,
      xl: 3,
      xxl: 3,
    },
  },
];

const defaultUsers = [
  {
    email: "maxisosa89@gmail.com",
    name: "Maxi",
    admin: true,
    picture:
      "https://lh3.googleusercontent.com/a-/AOh14GhqL0lyCMwVFpA03QxqhzxmMp1fIDXSX7beyb64=s70-p-k-rw-no",
  },

  {
    email: "elecalderon.ec@gmail.com",
    name: "Eleo",
    admin: false,
    picture:
      "https://lh3.googleusercontent.com/a-/AOh14GhqL0lyCMwVFpA03QxqhzxmMp1fIDXSX7beyb64=s70-p-k-rw-no",
  },

  {
    email: "elianh2015@gmail.com",
    name: "",
    admin: false,
    picture:
      "https://lh3.googleusercontent.com/a-/AOh14GhqL0lyCMwVFpA03QxqhzxmMp1fIDXSX7beyb64=s70-p-k-rw-no",
  },

  {
    email: "oiaraque@hotmail.com",
    name: "Oscar",
    admin: false,
    picture:
      "https://lh3.googleusercontent.com/a-/AOh14GhqL0lyCMwVFpA03QxqhzxmMp1fIDXSX7beyb64=s70-p-k-rw-no",
  },

  {
    email: "jonascript.cpu@gmail.com",
    name: "Jona",
    admin: false,
    picture:
      "https://lh3.googleusercontent.com/a-/AOh14GhqL0lyCMwVFpA03QxqhzxmMp1fIDXSX7beyb64=s70-p-k-rw-no",
  },

  {
    email: "ignaciogrillocaimary@gmail.com",
    name: "Nacho",
    admin: true,
    picture:
      "https://lh3.googleusercontent.com/ogw/ADea4I4DJ5xScae4_3XX-QBkf20nUwbNcD34h4rbxdWd-g=s83-c-mo",
  },

  {
    email: "etcheparede@gmail.com",
    name: "David",
    admin: false,
    picture:
      "https://lh3.googleusercontent.com/a-/AOh14GhqL0lyCMwVFpA03QxqhzxmMp1fIDXSX7beyb64=s70-p-k-rw-no",
  },

  {
    email: "nicolasmayorquinduran@gmail.com",
    name: "Nicolas",
    admin: true,
    picture:
      "https://lh3.googleusercontent.com/a-/AOh14Gj1-uJyQS_inNu3IEJZvImBNJNsLY2uW0-ocrm4=s96-c",
  },
];

const defaultPromos = [
  {
    title: "Gran promoción!",
    img: "https://image.freepik.com/foto-gratis/foto-calle-hermosa-chica-anteojos-rojos-capucha-vestido-chaqueta-colorida-verde_8353-7008.jpg",
    resume: "Por la compra de dos unidades te damos las gracias",
  },
  {
    title: "ültima hora :O!",
    img: "https://image.freepik.com/foto-gratis/mujer-hispana-riendo-alegremente-pared-graffiti-flores_181624-46424.jpg",
    resume: "50% de descuento en una prenda tendencia",
  },
  {
    title: "Puedes creer que..!",
    img: "https://image.freepik.com/foto-gratis/mujer-hermosa-calle_144627-11073.jpg",
    resume: "Compra 5 unidades y multiplicas el precio unitario por 5",
  },
];

module.exports = {
  vestidos,
  camisetas,
  blusas,
  pants,
  categorias,
  defaultUsers,
  defaultPromos,
};
