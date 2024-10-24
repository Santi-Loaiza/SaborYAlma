//Arrays de los platos
const entradas = [
    {
        imagen: '../IMAGES/MENUSABORYALMA/TostadasNikkei.jpeg',
        nombre: 'Tostadas Nikkei',
        descripcion: 'Tostadas de gyozas crocantes, atún y salmón en salsa nikkei, aroma de gari, puerro crocante caramelizado.',
        precio: 35000,
        ingredientesQuitar: ['Atún', 'Salmón', 'Puerro crocante caramelizado'],
        ingredientesAñadir: [{ingrediente: 'Pollo crocante', precio: 8000}]
    },
    {
        imagen: '../IMAGES/MENUSABORYALMA/RollitosHeisei.jpg',
        nombre: 'Rollitos Heisei',
        descripcion: 'Envueltos de salmón, queso philadelphia, hilos de mango, palmitos de cangrejo, salsa heisei, queso parmesano flameado.',
        precio: 34000,
        ingredientesQuitar: ['Queso Philadelphia', 'Hilos de Mango', 'Palmito de cangrejo', 'Queso parmesano flameado'],
        ingredientesAñadir: [{ingrediente: 'Camarones', precio: 12000}]
    },
    {
        imagen: '../IMAGES/MENUSABORYALMA/TatakiDeAtun.jpg',
        nombre: 'Tataki de Atún Trufado',
        descripcion: 'Finos cortes de atún encostrados en pimienta y sellado en parrilla bañado en salsa cremosa nikkei y aceite de trufa coronado con puerro caramelizado y gyoza crocante.',
        precio: 39000,
        ingredientesQuitar: ['Salsa cremosa nikkei', 'Aceite de trufa', 'Puerro caramelizado', 'Gyoza crocante'],
        ingredientesAñadir: [
            {ingrediente: 'Tofu marinado', precio: 6000},
            {ingrediente: 'Salmón ahumado', precio: 12000}
        ]
    },
    {
        imagen: '../IMAGES/MENUSABORYALMA/TornadosDeSalmon.jpg',
        nombre: 'Tornados de Salmón',
        descripcion: 'Rollos de salmón rellenos de aguacate y queso philadelphia, bañados en salsa de anguila y coronados con palmitos de cangrejo.',
        precio: 39000,
        ingredientesQuitar: ['Aguacate', 'Queso Philadelphia', 'Palmito de cangrejo'],
        ingredientesAñadir: [
            {ingrediente: 'Atún marinado', precio: 10000},
            {ingrediente: 'Queso ricotta', precio: 4500}
        ]
    },
    {
        imagen: '../IMAGES/MENUSABORYALMA/TartarMixto.jpg',
        nombre: 'Tartar Mixto',
        descripcion: 'Atún y salmón en aderezo nikkei mezclados con aguacate y shoyu.',
        precio: 32000,
        ingredientesQuitar: ['Atún', 'Salmón', 'Aguacate', 'Shoyu'],
        ingredientesAñadir: [
            {ingrediente: 'Pulpo a la parrilla', precio: 14000},
            {ingrediente: 'Tofu marinado', precio: 6000}
        ]
    },
    {
        imagen: '../IMAGES/MENUSABORYALMA/WontonesDeSalmon.jpg',
        nombre: 'Wontones de Salmón',
        descripcion: 'Wontones de salmón acompañados de salsa cítrica de ají amarillo y salsa rocoto.',
        precio: 22000,
        ingredientesQuitar: ['Salsa cítrica de ají amarillo', 'Salsa rocoto'],
        ingredientesAñadir: [
            {ingrediente: 'Salsa de tamarindo', precio: 3000},
            {ingrediente: 'Salsa de soya con miel', precio: 2500},
            {ingrediente: 'Salsa teriyaki', precio: 2000}
        ]
    },
    {
        imagen: '../IMAGES/MENUSABORYALMA/PorkBao.jpg',
        nombre: 'Pork Bao',
        descripcion: 'Pan asiático al vapor, pork belly caramelizado en cocción lenta, chucrut y manzana verde.',
        precio: 30000,
        ingredientesQuitar: ['Chucrut', 'Manzana verde'],
        ingredientesAñadir: [
            {ingrediente: 'Salsa hoisin', precio: 3000},
            {ingrediente: 'Cebolla morada encurtida', precio: 2800},
            {ingrediente: 'Pepino encurtido', precio: 2000},
            {ingrediente: 'Rábano encurtido', precio: 2500}
        ]
    }
];


// Función para mostrar los platos en el contenedor
function mostrarEntradas() {
    const contenedor = document.getElementById('contenedor-entradas');
    entradas.forEach(entrada => {
        const divItem = document.createElement('div');
        divItem.className = 'item';
        
        divItem.innerHTML = `
            <img src="${entrada.imagen}" alt="${entrada.nombre}">
            <h2>${entrada.nombre}</h2>
            <p>${entrada.descripcion}</p>
            <p>Precio: $${entrada.precio}</p>
        `;
        
        contenedor.appendChild(divItem);
    });
  }
  
  // Llamar a la función para mostrar las entradas
  mostrarEntradas();