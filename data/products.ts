interface Product {
  name: string;
  image: string;
  description: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
}

const products: Product[] = [
  {
    name: "iPhone 16 Pro Max",
    image:
      "https://smartbuy-me.com/cdn/shop/files/ABJ1501ST0350.jpg?v=1746006651&width=400",
    description:
      "El iPhone 16 Pro Max es el smartphone más avanzado de Apple, con una impresionante pantalla Super Retina XDR, un potente chip A18 Bionic y un sistema de cámaras revolucionario con mejor rendimiento en condiciones de poca luz y capacidades de video cinematográfico. Disfruta de una velocidad sin igual, imágenes impresionantes y batería para todo el día.",
    category: "smartphones",
    price: 1399.99,
    countInStock: 25,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "iPhone 15 Pro Max",
    image: "https://m.media-amazon.com/images/I/51+g1vWOAeL._AC_.jpg",
    description:
      "El iPhone 15 Pro Max ofrece una experiencia excepcional con su pantalla ProMotion XDR, chip A17 Bionic y un versátil sistema de cámaras Pro que incluye lente teleobjetivo para un zoom increíble. Disfruta de un rendimiento robusto, fotografía avanzada y diseño duradero.",
    category: "smartphones",
    price: 1199.99,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Samsung Galaxy S25",
    image: "https://m.media-amazon.com/images/I/61C17Al0dhL._AC_SL1500_.jpg",
    description:
      "El Samsung Galaxy S25 cuenta con una vibrante pantalla Dynamic AMOLED 2X, impulsada por el último procesador Snapdragon/Exynos para multitarea y juegos sin interrupciones. Su avanzado sistema de cámaras con múltiples lentes captura fotos y videos impresionantes, mientras que su diseño elegante y batería duradera lo convierten en una opción premium.",
    category: "smartphones",
    price: 999.99,
    countInStock: 20,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "iPhone 14",
    image: "https://m.media-amazon.com/images/I/51twnyEBC8L._AC_SL1151_.jpg",
    description:
      "El iPhone 14 ofrece un excelente equilibrio entre características y precio, con una brillante pantalla Super Retina XDR, chip A15 Bionic para un rendimiento rápido y un sistema de cámaras dual mejorado para fotos y videos nítidos. Disfruta de un rendimiento confiable y del reconocido ecosistema de Apple.",
    category: "smartphones",
    price: 799.99,
    countInStock: 40,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Apple Watch Series 10",
    image: "https://m.media-amazon.com/images/I/81CPZEl9HyL._AC_SL1500_.jpg",
    description:
      "El Apple Watch Series 10 es tu compañero definitivo de salud y fitness, con sensores avanzados para ECG y monitoreo de oxígeno en sangre, seguimiento físico robusto y una pantalla Retina siempre activa mejorada. Mantente conectado y activo con llamadas, mensajes y apps directamente desde tu muñeca.",
    category: "accesorios",
    price: 499.99,
    countInStock: 15,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Samsung Galaxy Buds 3",
    image: "https://m.media-amazon.com/images/I/51GobyVFywL._AC_SL1500_.jpg",
    description:
      "Vive una experiencia sonora envolvente con los Samsung Galaxy Buds 3. Estos audífonos inalámbricos ofrecen cancelación activa de ruido, calidad de llamadas cristalina y un ajuste cómodo para uso prolongado. Disfruta de conectividad fluida y audio rico para música, podcasts y más.",
    category: "accesorios",
    price: 199.99,
    countInStock: 25,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Google Pixel 9 Pro",
    image: "https://m.media-amazon.com/images/I/71uAesjXh5L._AC_SL1500_.jpg",
    description:
      "El Google Pixel 9 Pro incorpora el chip Tensor G4 de Google, un sistema de cámaras avanzado con mejoras por IA y una impresionante pantalla Actua. Disfruta de una experiencia Android pura, rendimiento potente y funciones innovadoras.",
    category: "smartphones",
    price: 1099.99,
    countInStock: 18,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Sony WH-1000XM5",
    image: "https://m.media-amazon.com/images/I/51aXvjzcukL._AC_SL1500_.jpg",
    description:
      "Los audífonos Sony WH-1000XM5 ofrecen cancelación de ruido líder en la industria, calidad de sonido excepcional y diseño cómodo sobre la oreja. Perfectos para viajes y desplazamientos diarios.",
    category: "audio",
    price: 399.99,
    countInStock: 30,
    rating: 0,
    numReviews: 0,
  },

  {
    name: "iPad Pro M4",
    image:
      "https://smartbuy-me.com/cdn/shop/files/ABJ1503ST0323_659a9533-1221-4948-bb4b-9615e87d7104.jpg?v=1727851168&width=1200",
    description:
      "El iPad Pro con chip M4 ofrece un rendimiento revolucionario y una impresionante pantalla Liquid Retina XDR. Ideal para flujos de trabajo profesionales, proyectos artísticos y entretenimiento inmersivo.",
    category: "tablets",
    price: 1099.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Bose QuietComfort Earbuds 3",
    image: "https://m.media-amazon.com/images/I/61qIEvCy6+L._AC_SL1500_.jpg",
    description:
      "Los Bose QuietComfort Earbuds 3 brindan cancelación de ruido de clase mundial y sonido realista aclamado. Ajuste seguro y cómodo para escuchar durante todo el día.",
    category: "audio",
    price: 279.99,
    countInStock: 22,
    rating: 0,
    numReviews: 0,
  },

  {
    name: "Microsoft Surface Pro 11",
    image: "https://m.media-amazon.com/images/I/61HPhDS+iaL._AC_SL1500_.jpg",
    description:
      "El Microsoft Surface Pro 11 es un dispositivo versátil 2 en 1 que ofrece la potencia de una laptop y la flexibilidad de una tablet. Ideal para productividad en movimiento.",
    category: "tablets",
    price: 1199.99,
    countInStock: 14,
    rating: 0,
    numReviews: 0,
  },
];

export default products;
