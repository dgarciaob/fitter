export const foodData = {
  "Clara de Huevo": {
    porUnidad: {
      calorias: 17,
      carbohidratos: 0.2,
      proteinas: 3.6,
      grasas: 0.1,
    },
  },
  "Pechuga de Pollo": {
    porGramos: {
      calorias: 165,
      carbohidratos: 0,
      proteinas: 31,
      grasas: 3.6,
    },
  },
  "Yema de Huevo": {
    porUnidad: {
      calorias: 55,
      carbohidratos: 0.6,
      proteinas: 2.7,
      grasas: 4.5,
    },
  },
  Avena: {
    porGramos: {
      calorias: 389,
      carbohidratos: 66.3,
      proteinas: 16.9,
      grasas: 6.9,
    },
  },
  Platano: {
    porUnidad: {
      calorias: 105,
      carbohidratos: 27,
      proteinas: 1.3,
      grasas: 0.3,
    },
  },
  Manzana: {
    porUnidad: {
      calorias: 95,
      carbohidratos: 25,
      proteinas: 0.5,
      grasas: 0.3,
    },
  },
  "Carne Molida": {
    porGramos: {
      calorias: 2.52,
      carbohidratos: 0,
      proteinas: 0.26,
      grasas: 0.18,
    },
  },
  Atun: {
    porGramos: {
      calorias: 1.16,
      carbohidratos: 0,
      proteinas: 0.26,
      grasas: 0.03,
    },
  },
  Palta: {
    porUnidad: {
      calorias: 322,
      carbohidratos: 17.1,
      proteinas: 4,
      grasas: 29,
    },
  },
  Pescado: {
    porGramos: {
      calorias: 2.07,
      carbohidratos: 0,
      proteinas: 0.46,
      grasas: 0.05,
    },
  },
  "Arroz Integral": {
    porGramos: {
      calorias: 1.1,
      carbohidratos: 0.23,
      proteinas: 0.03,
      grasas: 0.01,
    },
  },
  Lentejas: {
    porGramos: {
      calorias: 1.15,
      carbohidratos: 0.2,
      proteinas: 0.09,
      grasas: 0.01,
    },
  },
  Frijoles: {
    porGramos: {
      calorias: 1.29,
      carbohidratos: 0.24,
      proteinas: 0.08,
      grasas: 0.01,
    },
  },
  Mani: {
    porGramos: {
      calorias: 5.68,
      carbohidratos: 0.16,
      proteinas: 0.26,
      grasas: 0.49,
    },
  },
  Sandia: {
    porGramos: {
      calorias: 0.3,
      carbohidratos: 0.08,
      proteinas: 0.01,
      grasas: 0.01,
    },
  },
  Mango: {
    porUnidad: {
      calorias: 202,
      carbohidratos: 50,
      proteinas: 2.8,
      grasas: 1.3,
    },
  },
  Lechuga: {
    porGramos: {
      calorias: 5,
      carbohidratos: 1,
      proteinas: 0.5,
      grasas: 0.1,
    },
  },
  "Mantequilla de Maní": {
    porGramos: {
      calorias: 588,
      carbohidratos: 20,
      proteinas: 25,
      grasas: 50,
    },
  },
  Hamburguesa: {
    porGramos: {
      calorias: 250,
      carbohidratos: 32,
      proteinas: 12,
      grasas: 9,
    },
  },
  Fideos: {
    porGramos: {
      calorias: 157,
      carbohidratos: 31,
      proteinas: 5.8,
      grasas: 1.1,
    },
  },
  Fresa: {
    porUnidad: {
      calorias: 4,
      carbohidratos: 1,
      proteinas: 0.1,
      grasas: 0.1,
    },
  },
  Brocoli: {
    porGramos: {
      calorias: 55,
      carbohidratos: 11,
      proteinas: 3.7,
      grasas: 0.6,
    },
  },
  Papa: {
    porGramos: {
      calorias: 77,
      carbohidratos: 17.5,
      proteinas: 2,
      grasas: 0.1,
    },
  },
  Camote: {
    porGramos: {
      calorias: 86,
      carbohidratos: 20.1,
      proteinas: 1.6,
      grasas: 0.1,
    },
  },
  Mandarina: {
    porUnidad: {
      calorias: 47,
      carbohidratos: 11.7,
      proteinas: 0.7,
      grasas: 0.3,
    },
  },
  Chocolate: {
    porGramos: {
      calorias: 546,
      carbohidratos: 61,
      proteinas: 4.9,
      grasas: 31,
    },
  },
  Arándanos: {
    porGramos: {
      calorias: 57,
      carbohidratos: 14,
      proteinas: 0.7,
      grasas: 0.3,
    },
  },
  Garbanzo: {
    porGramos: {
      calorias: 164,
      carbohidratos: 27,
      proteinas: 8.9,
      grasas: 2.6,
    },
  },
  Bisteck: {
    porGramos: {
      calorias: 272,
      carbohidratos: 0,
      proteinas: 26,
      grasas: 17,
    },
  },
};

export const recetasDesayuno = [
  {
    id: "1",
    nombre: "Choco Avena",
    calorías: "287",
    carbohidratos: "23",
    proteinas: "8",
    grasas: "3",
    tiempo: "15 min",
    imagen: require("../assets/images/receta-avena.jpg"),
    ingredientes: [
      {
        cantidadIngrediente: "1/3",
        medida: "tz",
        ingrediente: "hojuelas de avena",
      },
      {
        cantidadIngrediente: "1/2",
        medida: "tz",
        ingrediente: "agua",
      },
      {
        cantidadIngrediente: "1/4",
        medida: "tz",
        ingrediente: "leche",
      },
      {
        cantidadIngrediente: "1",
        medida: "cda",
        ingrediente: "cocoa / cacao sin azúcar",
      },
      {
        cantidadIngrediente: "1",
        medida: "medida",
        ingrediente: "stevia",
      },
      {
        cantidadIngrediente: "1",
        medida: "pizca",
        ingrediente: "canela en polvo",
      },
    ],
    procedimiento: [
      {
        pasoUno:
          "En una ollita a fuego bajo, agrega el agua, la avena y la canela.",
        pasoDos:
          "Luego agrega la leche y deja que hierva por lo menos 10 min (o hasta que la avena absorba el agua).",
        pasoTres: "Por último agreguen el cacao en polvo y la stevia al gusto.",
      },
    ],
  },
  {
    id: "2",
    nombre: "Avocado Toast",
    calorías: "315",
    carbohidratos: "23",
    proteinas: "32",
    grasas: "14",
    tiempo: "12 min",
    imagen: require("../assets/images/receta-avocado-toast.jpg"),
    ingredientes: [
      {
        cantidadIngrediente: "2",
        medida: "und",
        ingrediente: "huevo",
      },
      {
        cantidadIngrediente: "1",
        medida: "und",
        ingrediente: "palta",
      },
      {
        cantidadIngrediente: "1",
        medida: "cda",
        ingrediente: "vinagre",
      },
      {
        cantidadIngrediente: "2",
        medida: "slides",
        ingrediente: "pan de molde",
      },
      {
        cantidadIngrediente: "1",
        medida: "pizca",
        ingrediente: "sal",
      },
    ],
    procedimiento: [
      {
        pasoUno: "Pon a hervir agua con vinagre y sal.",
        pasoDos: "Luego, hacer un remolino al centro de la olla.",
        pasoTres: "Luego, rompe el huevo y agregarlo al agua.",
        pasoCuatro: "Cocina 3 minutos y luego retíralo del agua.",
        pasoCinco: "Acompáñalo con tu fuente de carbohidratos.",
      },
    ],
  },
  {
    id: "3",
    nombre: "French Toast",
    calorías: "276",
    carbohidratos: "30",
    proteinas: "16",
    grasas: "9",
    tiempo: "20 min",
    imagen: require("../assets/images/receta-french-toast.jpg"),
    ingredientes: [
      {
        cantidadIngrediente: "2",
        medida: "und",
        ingrediente: "pan de molde integral",
      },
      {
        cantidadIngrediente: "2",
        medida: "und",
        ingrediente: "huevos",
      },
      {
        cantidadIngrediente: "1/4",
        medida: "tz",
        ingrediente: "leche light",
      },
      {
        cantidadIngrediente: "1",
        medida: "und",
        ingrediente: "plátano y fresas",
      },
      {
        cantidadIngrediente: "1",
        medida: "cda",
        ingrediente: "canela y stevia",
      },
    ],
    procedimiento: [
      {
        pasoUno:
          "Mezclar todos los ingredientes líquidos en un bowl, más la canela y la stevia.",
        pasoDos:
          "Por otro lado, con la ayuda de un rodillo estira el pan hasta que quede plano.",
        pasoTres: "Una vez estirado, enrollar con un poco de mantequilla.",
        pasoCuatro: "Remoja los rollitos de pan rellenos en la mezcla.",
        pasoCinco:
          "Por último, freír por ambos lados el pan y decora con las frutas que quieras.",
      },
    ],
  },
];

export const recetasAlmuerzo = [
  {
    id: "1",
    nombre: "Chaufa de Quinua",
    calorías: "566",
    carbohidratos: "27",
    proteinas: "48",
    grasas: "13",
    tiempo: "40 min",
    imagen: require("../assets/images/receta-chaufa-quinua.jpg"),
    ingredientes: [
      {
        cantidadIngrediente: "2",
        medida: "tz",
        ingrediente: "quinua cocida",
      },
      {
        cantidadIngrediente: "",
        medida: "",
        ingrediente: "cebolla china picada",
      },
      {
        cantidadIngrediente: "1/2",
        medida: "tz",
        ingrediente: "pimientos rojos",
      },
      {
        cantidadIngrediente: "1",
        medida: "tz",
        ingrediente: "brocoli",
      },
      {
        cantidadIngrediente: "1",
        medida: "und",
        ingrediente: "diente de ajo",
      },
      {
        cantidadIngrediente: "1",
        medida: "cda",
        ingrediente: "aceite de ajonjoli",
      },
      {
        cantidadIngrediente: "1",
        medida: "cda",
        ingrediente: "salsa de soya",
      },
      {
        cantidadIngrediente: "",
        medida: "",
        ingrediente: "sal al gusto",
      },
    ],
    procedimiento: [
      {
        pasoUno:
          "En una ollita a fuego bajo, agrega el agua, la avena y la canela.",
        pasoDos:
          "Luego agrega la leche y deja que hierva por lo menos 10 min (o hasta que la avena absorba el agua).",
        pasoTres: "Por último agreguen el cacao en polvo y la stevia al gusto.",
      },
    ],
  },
  {
    id: "2",
    nombre: "Quinua al Pesto",
    calorías: "566",
    carbohidratos: "27",
    proteinas: "48",
    grasas: "13",
    tiempo: "90 min",
    imagen: require("../assets/images/receta-quinua-pesto.jpg"),
    ingredientes: [
      {
        cantidadIngrediente: "2",
        medida: "tz",
        ingrediente: "quinua cocida",
      },
      {
        cantidadIngrediente: "",
        medida: "",
        ingrediente: "cebolla china picada",
      },
      {
        cantidadIngrediente: "1/2",
        medida: "tz",
        ingrediente: "pimientos rojos",
      },
      {
        cantidadIngrediente: "1",
        medida: "tz",
        ingrediente: "brocoli",
      },
      {
        cantidadIngrediente: "1",
        medida: "und",
        ingrediente: "diente de ajo",
      },
      {
        cantidadIngrediente: "1",
        medida: "cda",
        ingrediente: "aceite de ajonjoli",
      },
      {
        cantidadIngrediente: "1",
        medida: "cda",
        ingrediente: "salsa de soya",
      },
      {
        cantidadIngrediente: "",
        medida: "",
        ingrediente: "sal al gusto",
      },
    ],
    procedimiento: [
      {
        pasoUno:
          "En una ollita a fuego bajo, agrega el agua, la avena y la canela.",
        pasoDos:
          "Luego agrega la leche y deja que hierva por lo menos 10 min (o hasta que la avena absorba el agua).",
        pasoTres: "Por último agreguen el cacao en polvo y la stevia al gusto.",
      },
    ],
  },
  {
    id: "3",
    nombre: "Hamburguesa de Pavo",
    calorías: "378",
    carbohidratos: "2",
    proteinas: "50",
    grasas: "23",
    tiempo: "45 min",
    imagen: require("../assets/images/receta-hamburguesa-pavo.jpg"),
    ingredientes: [
      {
        cantidadIngrediente: "2",
        medida: "tz",
        ingrediente: "quinua cocida",
      },
      {
        cantidadIngrediente: "",
        medida: "",
        ingrediente: "cebolla china picada",
      },
      {
        cantidadIngrediente: "1/2",
        medida: "tz",
        ingrediente: "pimientos rojos",
      },
      {
        cantidadIngrediente: "1",
        medida: "tz",
        ingrediente: "brocoli",
      },
      {
        cantidadIngrediente: "1",
        medida: "und",
        ingrediente: "diente de ajo",
      },
      {
        cantidadIngrediente: "1",
        medida: "cda",
        ingrediente: "aceite de ajonjoli",
      },
      {
        cantidadIngrediente: "1",
        medida: "cda",
        ingrediente: "salsa de soya",
      },
      {
        cantidadIngrediente: "",
        medida: "",
        ingrediente: "sal al gusto",
      },
    ],
    procedimiento: [
      {
        pasoUno:
          "En una ollita a fuego bajo, agrega el agua, la avena y la canela.",
        pasoDos:
          "Luego agrega la leche y deja que hierva por lo menos 10 min (o hasta que la avena absorba el agua).",
        pasoTres: "Por último agreguen el cacao en polvo y la stevia al gusto.",
      },
    ],
  },
];

export const recetasSnacks = [
  {
    id: "1",
    nombre: "Carrot Cake",
    calorías: "230",
    carbohidratos: "27",
    proteinas: "23",
    grasas: "6",
    tiempo: "40 min",
    imagen: require("../assets/images/receta-carrot-cake.jpg"),
    ingredientes: [
      {
        cantidadIngrediente: "2",
        medida: "tz",
        ingrediente: "quinua cocida",
      },
      {
        cantidadIngrediente: "",
        medida: "",
        ingrediente: "cebolla china picada",
      },
      {
        cantidadIngrediente: "1/2",
        medida: "tz",
        ingrediente: "pimientos rojos",
      },
      {
        cantidadIngrediente: "1",
        medida: "tz",
        ingrediente: "brocoli",
      },
      {
        cantidadIngrediente: "1",
        medida: "und",
        ingrediente: "diente de ajo",
      },
      {
        cantidadIngrediente: "1",
        medida: "cda",
        ingrediente: "aceite de ajonjoli",
      },
      {
        cantidadIngrediente: "1",
        medida: "cda",
        ingrediente: "salsa de soya",
      },
      {
        cantidadIngrediente: "",
        medida: "",
        ingrediente: "sal al gusto",
      },
    ],
    procedimiento: [
      {
        pasoUno:
          "En una ollita a fuego bajo, agrega el agua, la avena y la canela.",
        pasoDos:
          "Luego agrega la leche y deja que hierva por lo menos 10 min (o hasta que la avena absorba el agua).",
        pasoTres: "Por último agreguen el cacao en polvo y la stevia al gusto.",
      },
    ],
  },
  {
    id: "2",
    nombre: "Overnight Oats",
    calorías: "189",
    carbohidratos: "27",
    proteinas: "13",
    grasas: "1",
    tiempo: "20 min",
    imagen: require("../assets/images/receta-overnight-oats.jpg"),
    ingredientes: [
      {
        cantidadIngrediente: "2",
        medida: "tz",
        ingrediente: "quinua cocida",
      },
      {
        cantidadIngrediente: "",
        medida: "",
        ingrediente: "cebolla china picada",
      },
      {
        cantidadIngrediente: "1/2",
        medida: "tz",
        ingrediente: "pimientos rojos",
      },
      {
        cantidadIngrediente: "1",
        medida: "tz",
        ingrediente: "brocoli",
      },
      {
        cantidadIngrediente: "1",
        medida: "und",
        ingrediente: "diente de ajo",
      },
      {
        cantidadIngrediente: "1",
        medida: "cda",
        ingrediente: "aceite de ajonjoli",
      },
      {
        cantidadIngrediente: "1",
        medida: "cda",
        ingrediente: "salsa de soya",
      },
      {
        cantidadIngrediente: "",
        medida: "",
        ingrediente: "sal al gusto",
      },
    ],
    procedimiento: [
      {
        pasoUno:
          "En una ollita a fuego bajo, agrega el agua, la avena y la canela.",
        pasoDos:
          "Luego agrega la leche y deja que hierva por lo menos 10 min (o hasta que la avena absorba el agua).",
        pasoTres: "Por último agreguen el cacao en polvo y la stevia al gusto.",
      },
    ],
  },
  {
    id: "3",
    nombre: "Parfait",
    calorías: "378",
    carbohidratos: "21",
    proteinas: "50",
    grasas: "2",
    tiempo: "45 min",
    imagen: require("../assets/images/receta-parfait.jpg"),
    ingredientes: [
      {
        cantidadIngrediente: "2",
        medida: "tz",
        ingrediente: "quinua cocida",
      },
      {
        cantidadIngrediente: "",
        medida: "",
        ingrediente: "cebolla china picada",
      },
      {
        cantidadIngrediente: "1/2",
        medida: "tz",
        ingrediente: "pimientos rojos",
      },
      {
        cantidadIngrediente: "1",
        medida: "tz",
        ingrediente: "brocoli",
      },
      {
        cantidadIngrediente: "1",
        medida: "und",
        ingrediente: "diente de ajo",
      },
      {
        cantidadIngrediente: "1",
        medida: "cda",
        ingrediente: "aceite de ajonjoli",
      },
      {
        cantidadIngrediente: "1",
        medida: "cda",
        ingrediente: "salsa de soya",
      },
      {
        cantidadIngrediente: "",
        medida: "",
        ingrediente: "sal al gusto",
      },
    ],
    procedimiento: [
      {
        pasoUno:
          "En una ollita a fuego bajo, agrega el agua, la avena y la canela.",
        pasoDos:
          "Luego agrega la leche y deja que hierva por lo menos 10 min (o hasta que la avena absorba el agua).",
        pasoTres: "Por último agreguen el cacao en polvo y la stevia al gusto.",
      },
    ],
  },
];

export const recetasBaratos = [
  {
    id: "1",
    nombre: "Croquetas de atún",
    calorías: "230",
    carbohidratos: "27",
    proteinas: "23",
    grasas: "6",
    tiempo: "40 min",
    imagen: require("../assets/images/receta-croquetas.jpg"),
    ingredientes: [
      {
        cantidadIngrediente: "2",
        medida: "tz",
        ingrediente: "quinua cocida",
      },
      {
        cantidadIngrediente: "",
        medida: "",
        ingrediente: "cebolla china picada",
      },
      {
        cantidadIngrediente: "1/2",
        medida: "tz",
        ingrediente: "pimientos rojos",
      },
      {
        cantidadIngrediente: "1",
        medida: "tz",
        ingrediente: "brocoli",
      },
      {
        cantidadIngrediente: "1",
        medida: "und",
        ingrediente: "diente de ajo",
      },
      {
        cantidadIngrediente: "1",
        medida: "cda",
        ingrediente: "aceite de ajonjoli",
      },
      {
        cantidadIngrediente: "1",
        medida: "cda",
        ingrediente: "salsa de soya",
      },
      {
        cantidadIngrediente: "",
        medida: "",
        ingrediente: "sal al gusto",
      },
    ],
    procedimiento: [
      {
        pasoUno:
          "En una ollita a fuego bajo, agrega el agua, la avena y la canela.",
        pasoDos:
          "Luego agrega la leche y deja que hierva por lo menos 10 min (o hasta que la avena absorba el agua).",
        pasoTres: "Por último agreguen el cacao en polvo y la stevia al gusto.",
      },
    ],
  },
  {
    id: "2",
    nombre: "Wrap de Atún",
    calorías: "189",
    carbohidratos: "27",
    proteinas: "13",
    grasas: "1",
    tiempo: "20 min",
    imagen: require("../assets/images/receta-wrap.jpg"),
    ingredientes: [
      {
        cantidadIngrediente: "2",
        medida: "tz",
        ingrediente: "quinua cocida",
      },
      {
        cantidadIngrediente: "",
        medida: "",
        ingrediente: "cebolla china picada",
      },
      {
        cantidadIngrediente: "1/2",
        medida: "tz",
        ingrediente: "pimientos rojos",
      },
      {
        cantidadIngrediente: "1",
        medida: "tz",
        ingrediente: "brocoli",
      },
      {
        cantidadIngrediente: "1",
        medida: "und",
        ingrediente: "diente de ajo",
      },
      {
        cantidadIngrediente: "1",
        medida: "cda",
        ingrediente: "aceite de ajonjoli",
      },
      {
        cantidadIngrediente: "1",
        medida: "cda",
        ingrediente: "salsa de soya",
      },
      {
        cantidadIngrediente: "",
        medida: "",
        ingrediente: "sal al gusto",
      },
    ],
    procedimiento: [
      {
        pasoUno:
          "En una ollita a fuego bajo, agrega el agua, la avena y la canela.",
        pasoDos:
          "Luego agrega la leche y deja que hierva por lo menos 10 min (o hasta que la avena absorba el agua).",
        pasoTres: "Por último agreguen el cacao en polvo y la stevia al gusto.",
      },
    ],
  },
  {
    id: "3",
    nombre: "Ensalada César",
    calorías: "378",
    carbohidratos: "21",
    proteinas: "50",
    grasas: "2",
    tiempo: "45 min",
    imagen: require("../assets/images/receta-ensalada.jpg"),
    ingredientes: [
      {
        cantidadIngrediente: "2",
        medida: "tz",
        ingrediente: "quinua cocida",
      },
      {
        cantidadIngrediente: "",
        medida: "",
        ingrediente: "cebolla china picada",
      },
      {
        cantidadIngrediente: "1/2",
        medida: "tz",
        ingrediente: "pimientos rojos",
      },
      {
        cantidadIngrediente: "1",
        medida: "tz",
        ingrediente: "brocoli",
      },
      {
        cantidadIngrediente: "1",
        medida: "und",
        ingrediente: "diente de ajo",
      },
      {
        cantidadIngrediente: "1",
        medida: "cda",
        ingrediente: "aceite de ajonjoli",
      },
      {
        cantidadIngrediente: "1",
        medida: "cda",
        ingrediente: "salsa de soya",
      },
      {
        cantidadIngrediente: "",
        medida: "",
        ingrediente: "sal al gusto",
      },
    ],
    procedimiento: [
      {
        pasoUno:
          "En una ollita a fuego bajo, agrega el agua, la avena y la canela.",
        pasoDos:
          "Luego agrega la leche y deja que hierva por lo menos 10 min (o hasta que la avena absorba el agua).",
        pasoTres: "Por último agreguen el cacao en polvo y la stevia al gusto.",
      },
    ],
  },
];
