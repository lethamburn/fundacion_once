const articulos = [
  {
    name: "Caja de Sorpresas",
    price: 9.99,
    photo: "https://media.istockphoto.com/id/183765518/es/foto/pop-la-pregunta.jpg?s=612x612&w=0&k=20&c=JTPs__osae5X0YgHLRn6N4BJnUZagZknplItIS2Pt04=",
    description:
      "Una caja que explota cuando se abre, ¡ideal para asustar a tus amigos!",
  },
  {
    name: "Pastel de Confeti",
    price: 12.99,
    photo: "https://media.mykaramelli.com/galeria/recetas/tarta-confeti-o-funfetti_448_1.jpg",
    description:
      "Un pastel que dispara confeti en la cara de la persona que lo corta.",
  },
  {
    name: "Goma de Mascar Explosiva",
    price: 5.99,
    photo: "https://m.media-amazon.com/images/I/81V3no01VqL._AC_UF894,1000_QL80_.jpg",
    description:
      "Una goma de mascar que explota como un chicle globo cuando alguien la mastica.",
  },
  {
    name: "Broma de Araña de Goma",
    price: 3.99,
    photo: "https://m.media-amazon.com/images/I/61H8g16FkyL._AC_UF894,1000_QL80_.jpg",
    description: "Una araña de goma realista que salta cuando alguien la toca.",
  },
  {
    name: "Teléfono de Chocolate",
    price: 8.99,
    photo: "https://c1.staticflickr.com/1/693/23175360402_c770dc2b71_b.jpg",
    description:
      "Un teléfono de aspecto real hecho de chocolate. ¡Sorprende a tus amigos!",
  },
  {
    name: "Cubitos de Hielo Falsos",
    price: 4.99,
    photo: "https://m.media-amazon.com/images/I/81W0R8eeYwL._AC_UF1000,1000_QL80_.jpg",
    description:
      "Cubitos de hielo de plástico que no se derriten, ¡perfectos para bebidas falsas!",
  },
  {
    name: "Pañuelo Mágico",
    price: 6.99,
    photo: "https://www.magiapym.com/image/cache/catalog/18c-600x600.jpg",
    description:
      "Un pañuelo que nunca termina de salir de la manga, ¡diversión infinita!",
  },
  {
    name: "Insectos de Juguete",
    price: 3.99,
    photo: "https://www.jugarijugar.com/10559-large_default/tubo-insectos-de-juguete.jpg",
    description:
      "Insectos de plástico realistas para dejar en lugares inesperados.",
  },
  {
    name: "Vaso que Gotea",
    price: 7.99,
    photo: "https://thumbs.dreamstime.com/b/el-caf%C3%A9-gotea-en-vaso-272857402.jpg",
    description:
      "Un vaso que parece estar lleno pero gotea agua cuando se intenta beber.",
  },
  {
    name: "Pegatina Falsa de Araña",
    price: 2.99,
    photo: "https://www.botanical-online.com/wp-content/uploads/arana-steatoda-grossa.jpg",
    description:
      "Una pegatina realista de araña para poner en la espalda de alguien.",
  },
  {
    name: "Papel Higiénico de Broma",
    price: 5.99,
    photo: "https://m.media-amazon.com/images/I/71-jpps8WpL._AC_UF1000,1000_QL80_.jpg",
    description:
      "Papel higiénico con impresión de billetes de dólar, ¡diviértete en el baño!",
  },
  {
    name: "Dentadura Falsa",
    price: 4.99,
    photo: "https://www.dosfarma.com/blog/wp-content/uploads/2018/01/06-11-2017-dentadura.jpg",
    description: "Una dentadura postiza que parece real, ¡haz reír a todos!",
  },
  {
    name: "Tarta de Jabón",
    price: 10.99,
    photo: "https://www.youwish.nl/wp-content/uploads/2021/04/25cm-loaf-mold2-300x360.jpg",
    description:
      "Una tarta que parece deliciosa pero en realidad es de jabón, ¡sorprende a tus invitados!",
  },
  {
    name: "Billete Gigante Falso",
    price: 9.99,
    photo: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(png)/origin-imgresizer.eurosport.com/2023/03/02/3587945-73068068-2560-1440.png",
    description:
      "Un billete gigante de un millón de dólares para hacer creer que eres millonario.",
  },
  {
    name: "Chicle Largo Infinito",
    price: 3.99,
    photo: "https://i.blogs.es/d0fccf/chicle2/450_1000.jpg",
    description: "Un chicle que nunca se acaba, ¡diversión interminable!",
  },
  {
    name: "Araña de Control Remoto",
    price: 14.99,
    photo: "https://www.quieroregalarte.com/4454-large_default/arana-con-control-remoto.jpg",
    description:
      "Una araña de juguete que puedes controlar con un control remoto, ¡ideal para asustar!",
  },
  {
    name: "Gafas de Nariz y Bigote",
    price: 6.99,
    photo: "https://m.media-amazon.com/images/I/51Pz5LWWw7L._AC_UF894,1000_QL80_.jpg",
    description:
      "Gafas con nariz y bigote falsos para cambiar tu apariencia al instante.",
  },
  {
    name: "Pisapapeles de Gelatina",
    price: 8.99,
    photo: "https://mymodernmet.com/wp/wp-content/uploads/2018/11/jelly-cakes-siew-heng-boon-2.jpg",
    description:
      "Un pisapapeles que parece gelatina, ¡sorprende a tus compañeros de trabajo!",
  },
  {
    name: "Control Remoto Universal Falso",
    price: 12.99,
    photo: "https://m.media-amazon.com/images/I/519YaUPlXHL.jpg",
    description:
      "Un control remoto que no controla nada, ¡diviértete haciéndolo parecer real!",
  },
  {
    name: "Caja de Pañuelos que Dispara Confeti",
    price: 11.99,
    photo: "https://m.media-amazon.com/images/I/81F8yQaTVnL._AC_UF894,1000_QL80_.jpg",
    description:
      "Una caja de pañuelos que dispara confeti cuando se abre, ¡alegra cualquier día!",
  },
];

export default articulos