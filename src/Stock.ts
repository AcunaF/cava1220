interface Producto {
  nombre: string;
  precio: [string, string];
  tipo: string;
}

const productos: Producto[] = [
  {
    nombre: "Glenfiddich 15 años x 750 ml",
    precio: ["$ 43.265,53", "$ 57.210,62"],
    tipo: "destilados",
  },
  {
    nombre: "Tanqueray London Dry Gin x 700 ml",
    precio: ["$ 5.500,00", "$ 7.217,09"],
    tipo: "gin",
  },
  {
    nombre: "Malbec 750 ml",
    precio: ["$ 1.200,00", "$ 1.600,00"],
    tipo: "vinos",
  },
  {
    nombre: "Gatorade x 600 ml",
    precio: ["$ 1.500,00", "$ 1.968,73"],
    tipo: "bebidas",
  },
  {
    nombre: "Jura Original 12 años Single malt x 750 ml",
    precio: ["$ 41.400,00", "$ 54.743,80"],
    tipo: "destilados",
  },
  {
    nombre: "Jura Original 12 años Single malt x 700 ml",
    precio: ["$ 36.000,00", "$ 47.603,31"],
    tipo: "destilados",
  },
  {
    nombre: "BRUICHLADDICH CLASSIC LADDIE ESTUCHE X 700ml",
    precio: ["$ 25.000,00", "$ 33.057,85"],
    tipo: "destilados",
  },
  {
    nombre: "Jameson Irish Whiskey 700 ml",
    precio: ["$ 6.396,00", "$ 8.457,52"],
    tipo: "destilados",
  },
  {
    nombre: "HIGHLAND PARK SMOKY & BOLD X 1000ml",
    precio: ["$ 50.371,00", "$ 66.606,28"],
    tipo: "destilados",
  },
  {
    nombre: "HIGHLAND PARK 18 AÑOS X 700ml",
    precio: ["$ 165.789,00", "$ 219.225,12"],
    tipo: "destilados",
  },
  {
    nombre: "Highland Park 12 años x 700 ml",
    precio: ["$ 63.731,00", "$ 84.272,40"],
    tipo: "destilados",
  },
  {
    nombre: "WoodfordReserve DOUBLE OAKED 1000 ml",
    precio: ["$ 30.000,00", "$ 39.669,42"],
    tipo: "destilados",
  },
  {
    nombre: "WoodfordReserve 1000 ml + 1 Vaso Grabado (En caja)",
    precio: ["$ 43.125,00", "$ 57.024,79"],
    tipo: "destilados",
  },
  {
    nombre: "WoodfordReserve 1000 ml",
    precio: ["$ 27.600,00", "$ 36.495,87"],
    tipo: "destilados",
  },
  {
    nombre: "Vodka Roberto Cavalli Gold x 1000 ml",
    precio: ["$ 33.000,00", "$ 43.636,36"],
    tipo: "destilados",
  },
  {
    nombre: "Vodka Roberto Cavalli Black x 1000 ml",
    precio: ["$ 33.000,00", "$ 43.636,36"],
    tipo: "destilados",
  },
  {
    nombre: "Vodka Grey Goose Pera x 1000 ml",
    precio: ["$ 18.500,00", "$ 24.462,81"],
    tipo: "destilados",
  },
  {
    nombre: "Vodka Grey Goose Original x 1000 ml EN LATA",
    precio: ["$ 18.500,00", "$ 24.462,81"],
    tipo: "destilados",
  },
  {
    nombre: "Vodka Grey Goose Original x 1000 ml",
    precio: ["$ 18.500,00", "$ 24.462,81"],
    tipo: "destilados",
  },
  {
    nombre: "Vodka Grey Goose Orange x 1000 ml",
    precio: ["$ 18.500,00", "$ 24.462,81"],
    tipo: "destilados",
  },
  {
    nombre: "Vodka Grey Goose Citron x 1000 ml",
    precio: ["$ 18.500,00", "$ 24.462,81"],
    tipo: "destilados",
  },
  {
    nombre: "Vodka Grey Goose Cherry x 1000 ml",
    precio: ["$ 18.500,00", "$ 24.462,81"],
    tipo: "destilados",
  },
  {
    nombre: "Vodka Ciroc Summer x 750 ml",
    precio: ["$ 23.650,00", "$ 31.272,73"],
    tipo: "destilados",
  },
  {
    nombre: "Vodka Ciroc snap frost x 750 ml",
    precio: ["$ 16.750,00", "$ 22.148,76"],
    tipo: "destilados",
  },
  {
    nombre: "Vodka Ciroc Red Berry x 750 ml",
    precio: ["$ 16.750,00", "$ 22.148,76"],
    tipo: "destilados",
  },
  {
    nombre: "Vodka Ciroc Pineapple x 750 ml",
    precio: ["$ 16.750,00", "$ 22.148,76"],
    tipo: "destilados",
  },
  {
    nombre: "Vodka Ciroc Coco x 750 ml",
    precio: ["$ 16.750,00", "$ 22.148,76"],
    tipo: "destilados",
  },
  {
    nombre: "Vodka CIROC Botellon x 3000 ml",
    precio: ["$ 87.120,00", "$ 115.200,00"],
    tipo: "destilados",
  },
  {
    nombre: "The Macallan Terra x 700 ml",
    precio: ["$ 97.750,00", "$ 129.256,20"],
    tipo: "destilados",
  },
  {
    nombre: "The Macallan Terra x 700 ml",
    precio: ["$ 97.750,00", "$ 129.256,20"],
    tipo: "promociones",
  },
  {
    nombre: "Jack Daniel's Single Barrel x 750 ml + 2 VASOS",
    precio: ["$ 60.400,00", "$ 79.867,77"],
    tipo: "whisky",
  },
  {
    nombre: "Gin Mare x 1000 ml",
    precio: ["$ 37.487,50", "$ 49.570,25"],
    tipo: "whisky",
  },
  {
    nombre: "Cragganmore 12 Años x 750 ml",
    precio: ["$ 23.900,00", "$ 31.603,31"],
    tipo: "whisky",
  },
  {
    nombre: "Moet & Chandon Rose ICE x 750 ml",
    precio: ["$ 62.000,00", "$ 81.983,47"],
    tipo: "whisky",
  },
  {
    nombre: "Moet & Chandon Champagne Rose",
    precio: ["$ 46.000,00", "$ 60.826,45"],
    tipo: "whisky",
  },
  {
    nombre: "BOTTEGA WHITE X 750 ml",
    precio: ["$ 17.500,00", "$ 23.140,50"],
    tipo: "whisky",
  },
  {
    nombre: "BOTTEGA ROSE X 750 ml",
    precio: ["$ 17.500,00", "$ 23.140,50"],
    tipo: "whisky",
  },
  {
    nombre: "Moet Imperial Brut",
    precio: ["$ 27.500,00", "$ 36.363,64"],
    tipo: "whisky",
  },
  {
    nombre: "MOET & CHANDON CHAMPAGNE MOT IMPERIAL X 750ml",
    precio: ["$ 27.485,00", "$ 36.343,80"],
    tipo: "whisky",
  },
  {
    nombre: "Cuadros - Moett y Chandon",
    precio: ["$ 15.000,00", "$ 19.834,71"],
    tipo: "whisky",
  },
  {
    nombre: "Moet & Chandon ICE IMPERIAL x 750 ml",
    precio: ["$ 30.000,00", "$ 39.669,42"],
    tipo: "whisky",
  },
  {
    nombre: "BOTTEGA GOLD X 750 ml",
    precio: ["$ 17.500,00", "$ 23.140,50"],
    tipo: "whisky",
  },
  {
    nombre: "Veuve Cliquot Pencil",
    precio: ["$ 49.500,00", "$ 65.454,55"],
    tipo: "bebidas",
  },
  {
    nombre: "Veuve Cliquot Gouache Brut",
    precio: ["$ 33.000,00", "$ 43.636,36"],
    tipo: "bebidas",
  },
  {
    nombre: "Veuve Cliquot Brut Con Estuche X 2 Unidades",
    precio: ["$ 55.000,00", "$ 72.727,27"],
    tipo: "bebidas",
  },
  {
    nombre: "Veuve Cliquot Brut",
    precio: ["$ 33.000,00", "$ 43.636,36"],
    tipo: "bebidas",
  },
  {
    nombre: "Veuve Cliquot Rose",
    precio: ["$ 26.400,00", "$ 34.909,09"],
    tipo: "bebidas",
  },
  {
    nombre: "Champagne Pommery Brut royal x 750ml",
    precio: ["$ 27.000,00", "$ 35.702,48"],
    tipo: "bebidas",
  },
  {
    nombre: "Teho Zaha Semillon x 750 cc",
    precio: ["$ 3.304,80", "$ 4.369,98"],
    tipo: "vinos",
  },
  {
    nombre: "Teho Zaha Marsanne x 750 cc",
    precio: ["$ 1.982,88", "$ 2.621,99"],
    tipo: "vinos",
  },
  {
    nombre: "Teho Zaha Malbec",
    precio: ["$ 4.067,45", "$ 5.378,44"],
    tipo: "vinos",
  },
  {
    nombre: "Teho ZAHA Flora Rose de Pinot Noir x 750 cc",
    precio: ["$ 3.008,22", "$ 3.977,81"],
    tipo: "vinos",
  },
  {
    nombre: "White Horse 750 ml",
    precio: ["$ 2.075,68", "$ 2.744,70"],
    tipo: "whisky",
  },
  {
    nombre: "The Singleton 18 años x 700 ml",
    precio: ["$ 30.413,00", "$ 40.215,54"],
    tipo: "whisky",
  },
  {
    nombre: "The Singleton 15 Años",
    precio: ["$ 20.276,00", "$ 26.811,24"],
    tipo: "whisky",
  },
  {
    nombre: "The Singleton 12 años x 700 ml",
    precio: ["$ 12.067,00", "$ 15.956,36"],
    tipo: "whisky",
  },
  {
    nombre: "Talisker Single Malt x 750 ml",
    precio: ["$ 23.214,00", "$ 30.696,20"],
    tipo: "whisky",
  },
  {
    nombre: "Old Parr x 750 ml",
    precio: ["$ 8.000,00", "$ 10.578,51"],
    tipo: "whisky",
  },
  {
    nombre: "Licor Sheridan Irlandés x 700 ml",
    precio: ["$ 7.112,60", "$ 9.405,09"],
    tipo: "whisky",
  },
  {
    nombre: "Johnnie Walker Swing 750 ml",
    precio: ["$ 21.762,00", "$ 28.776,20"],
    tipo: "whisky",
  },
  {
    nombre: "Johnnie Walker Red Label 750 ml",
    precio: ["$ 5.763,13", "$ 7.620,67"],
    tipo: "whisky",
  },
  {
    nombre: "Johnnie Walker Red Label 1000 ml",
    precio: ["$ 6.900,00", "$ 9.123,97"],
    tipo: "whisky",
  },
  {
    nombre: "Johnnie Walker Green Label 750 ml",
    precio: ["$ 30.522,00", "$ 40.359,67"],
    tipo: "whisky",
  },
  {
    nombre: "Johnnie Walker Gold Label Reserve 750 ml",
    precio: ["$ 19.104,50", "$ 25.262,15"],
    tipo: "whisky",
  },
  {
    nombre: "Johnnie Walker Blue label TIFFANY 750 ml",
    precio: ["$ 81.660,40", "$ 107.980,69"],
    tipo: "whisky",
  },
  {
    nombre: "Johnnie Walker Black Label 750 ml",
    precio: ["$ 9.880,00", "$ 13.064,46"],
    tipo: "whisky",
  },
  {
    nombre: "Johnnie Walker Black Label 1000 ml",
    precio: ["$ 11.757,15", "$ 15.546,64"],
    tipo: "whisky",
  },
  {
    nombre: "Johnnie Walker 18 años x 750 ml",
    precio: ["$ 39.413,91", "$ 52.117,57"],
    tipo: "whisky",
  },
  {
    nombre: "Clynelish 14 años x 750 cc Single Malt",
    precio: ["$ 26.116,50", "$ 34.534,21"],
    tipo: "whisky",
  },
  {
    nombre: "Cardhu 12 años x 700 ml",
    precio: ["$ 23.277,08", "$ 30.779,61"],
    tipo: "whisky",
  },
  {
    nombre: "Buchanan's 12 Años x 750 ml",
    precio: ["$ 10.374,00", "$ 13.717,69"],
    tipo: "whisky",
  },
  {
    nombre: "Teho ZAHA Flora Naranjo x 500 cc",
    precio: ["$ 3.657,88", "$ 4.836,86"],
    tipo: "vino",
  },
  {
    nombre: "Teho Zaha Espumante Calcaire x 750 NATURE",
    precio: ["$ 3.417,78", "$ 4.519,38"],
    tipo: "vino",
  },
  {
    nombre: "Teho Zaha el Corte x 750",
    precio: ["$ 5.390,31", "$ 7.127,68"],
    tipo: "vino",
  },
  {
    nombre: "Teho Zaha Cabernet Sauvignon x 750",
    precio: ["$ 4.067,45", "$ 5.378,44"],
    tipo: "vino",
  },
  {
    nombre: "Teho Zaha Cabernet Franc x 750 cc",
    precio: ["$ 4.067,45", "$ 5.378,44"],
    tipo: "vino",
  },
  {
    nombre: "Teho Semillon x 750 cc",
    precio: ["$ 4.072,15", "$ 5.384,67"],
    tipo: "vino",
  },
  {
    nombre: "Teho Malbec x 750 cc",
    precio: ["$ 6.148,25", "$ 8.129,91"],
    tipo: "vino",
  },
  {
    nombre: "Teho GRAND CRU Mixta Caja de madera x 3 unidades de 750 cc",
    precio: ["$ 9.697,85", "$ 12.823,60"],
    tipo: "vino",
  },
  {
    nombre: "Teho GRAND CRU Les Velours Caja de madera x 3 unidades de 750 cc",
    precio: ["$ 9.697,85", "$ 12.823,60"],
    tipo: "vino",
  },
];


const apiProductos = {
  list: (): Producto[] => {
    return productos;
  },
  fetch: (tipo: string): Producto[] => {
    console.log(tipo);

    return productos.filter((producto: Producto) => producto.tipo == tipo);
  },
};

export default apiProductos;
