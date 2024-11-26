// USUARIOS YA CREADOS.
Cajeros = [
    {nombre: "Juan",
    apellidos: "Velazquez Muñoz",
    edad: 25, 
    usuario: "cajero1",
    contraseña: "cajero1",
    }
]
Meseros = [
    {nombre: "Pedro",
        apellidos: "Garcia Lopez",
        edad: 30,
        usuario: "mesero1",
        contraseña: "mesero1",
    },
    {nombre: "Luis",
        apellidos: "Martinez Hernandez",
        edad: 35,
        usuario: "mesero2",
        contraseña: "mesero2",
    }
]

// Obtener los usuarios guardados del localStorage
function obtenerUsuarios() {
    const usuariosGuardados = localStorage.getItem('usuarios');
    return usuariosGuardados ? JSON.parse(usuariosGuardados) : {};
}

// Registrar nuevo usuario
document.getElementById('registrarBtn')?.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    const nuevoUsuario = document.getElementById('usuario-email').value;
    const nuevoContraseña = document.getElementById('contraseña').value;
    const nombre = document.getElementById('nombres').value; // Suponiendo que tienes un campo para el nombre
    const apellido = document.getElementById('apellidos').value; // Suponiendo que tienes un campo para el apellido

    // Obtener usuarios existentes
    const usuarios = obtenerUsuarios();

    // Verificar si el usuario ya existe
    if (usuarios[nuevoUsuario]) {
        alert('El usuario ya está registrado. Intenta con otro.');
        return;
    }

    // Guardar el nuevo usuario en el objeto
    if (nuevoUsuario && nuevoContraseña && nombre && apellido) {
        const contenedorPrincipalRegistro = document.getElementById('main-container-registro') 
        contenedorPrincipalRegistro.textContent = `Cargando...`
        setTimeout(
            () =>{
                usuarios[nuevoUsuario] = {
            contraseña: nuevoContraseña,
            nombre: nombre,
            apellido: apellido
        }; // Almacenar el usuario, contraseña, nombre y apellido
        localStorage.setItem('usuarios', JSON.stringify(usuarios)); // Guardar en localStorage
        alert('Usuario registrado con éxito');
        window.location.href = "../HTML/iniciarSesion.html";
            }, 3000    )
    } else {
        alert('Por favor ingrese todos los campos');
    }
});

// Visibilidad de la contraseña
document.getElementById('togglePassword')?.addEventListener('click', function() {
    const contraseñaInput = document.getElementById('contraseña');
    
    // Verificar y cambiar el tipo actual
    if (contraseñaInput.type === 'password') {
        contraseñaInput.type = 'text';
        this.textContent = 'Ocultar';
    } else {
        contraseñaInput.type = 'password';
        this.textContent = 'Ver';
    }
});
// Iniciar sesión
document.getElementById('iniciarSesionBtn')?.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    const usuario = document.getElementById('loginUsuario').value;
    const contraseña = document.getElementById('loginContraseña').value;
    const usuarios = obtenerUsuarios();
    const contenedorPrincipalIniciarSesion = document.getElementById('main-container-iniciarSesion');
    // Verificar si el usuario es un usuario regular
    if (usuarios[usuario] && usuarios[usuario].contraseña === contraseña) {
        contenedorPrincipalIniciarSesion.textContent = `Cargando...`;
        setTimeout(() => {
            sessionStorage.setItem('sesionActiva', true);
            sessionStorage.setItem('nombre', usuarios[usuario].nombre); // Guardar nombre en sessionStorage
            sessionStorage.setItem('apellido', usuarios[usuario].apellido); // Guardar apellido en sessionStorage
            alert('Sesión iniciada con éxito');
            window.location.href = "../HTML/vistaCliente.html";
        }, 3000);
    } 
    // Verificar si el usuario es un cajero
    else {
        const cajero = Cajeros.find(c => c.usuario === usuario && c.contraseña === contraseña);
        if (cajero) {
            contenedorPrincipalIniciarSesion.textContent = `Cargando...`;
            setTimeout(() => {
                sessionStorage.setItem('sesionActiva', true);
                alert('Sesión iniciada con éxito');
                window.location.href = "../HTML/vistaCajero.html";
            }, 3000);
        } else {
            const mesero = Meseros.find(mesero => mesero.usuario === usuario && mesero.contraseña === contraseña);
            if (mesero) {
            contenedorPrincipalIniciarSesion.textContent = `Cargando...`;
            setTimeout(() => {
                sessionStorage.setItem('sesionActiva', true);
                alert('Sesión iniciada con éxito');
                window.location.href = "../HTML/vistaMesero.html";
            }, 3000);
        } else{
            alert('Usuario o contraseña incorrectos');
        }
        }
    }
});

// Cerrar sesión
document.getElementById('cerrarSesionBtn')?.addEventListener('click', function() {
    sessionStorage.removeItem('sesionActiva');
    sessionStorage.removeItem('nombre'); // Eliminar nombre de sessionStorage
    sessionStorage.removeItem('apellido'); // Eliminar apellido de sessionStorage
    window.location.href = "../index.html";
});

// Mostrar mensaje de bienvenida
document.addEventListener('DOMContentLoaded', function() {
    const nombre = sessionStorage.getItem('nombre');
    const apellido = sessionStorage.getItem('apellido');

    if (nombre && apellido) {
        document.getElementById('welcomeMessage').textContent = `¡Bienvenid@, ${nombre} ${apellido}!`;
    } else {
        document.getElementById('welcomeMessage').textContent = '¡Bienvenido!';
    }
});

//Productos menu
//Arrays de las entradas
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

// Array de los platos fuertes
const platosFuertes = [
    {
      imagen: '../IMAGES/MENUSABORYALMA/LomoSaborYAlma.jpg',
      nombre: 'Lomo Sabor Y Alma',
      descripcion: 'Lomo a término en parrilla bañado en salsa madeira, sobre un arroz cremoso a base de setas y queso azul, coronado con parmesano.',
      precio: 55000,
      ingredientesQuitar: ['Parmessano', 'Setas', 'Queso azul'],
      ingredientesAñadir: [
        { ingrediente: 'Espárragos salteados', precio: 6000 },
        { ingrediente: 'Rúcula fresca', precio: 3000 }
      ]
    },
    {
      imagen: '../IMAGES/MENUSABORYALMA/LomoSelvaEnRissotoDeAjíAmarillo.jpg',
      nombre: 'Lomo Selva en Risotto de Ají Amarillo',
      descripcion: 'Lomito jugoso en cama de risotto al ají amarillo diseñado con salsa de fresa y hierbabuena.',
      precio: 53000,
      ingredientesQuitar: ['Salsa de fresa', 'Hierbabuena'],
      ingredientesAñadir: [
        { ingrediente: 'Salsa de tamarindo', precio: 3000 },
        { ingrediente: 'Tomates confitados', precio: 3500 },
        { ingrediente: 'Albahaca fresca', precio: 2500 }
      ]
    },
    {
      imagen: '../IMAGES/MENUSABORYALMA/PolloTrufado.jpg',
      nombre: 'Pollo Trufado',
      descripcion: 'Julianas de pollo trufadas a la parrilla sobre una cama de pasta tipo Alfredo, coronadas con brotes.',
      precio: 37000,
      ingredientesQuitar: [],
      ingredientesAñadir: [
        { ingrediente: 'Queso parmessano', precio: 0 },
        { ingrediente: 'Hongos portobello', precio: 4500 },
        { ingrediente: 'Alcachofas asadas', precio: 5000 },
        { ingrediente: 'Tomates Cherry confitados', precio: 3500 }
      ]
    },
    {
      imagen: '../IMAGES/MENUSABORYALMA/SalmonCremoso.jpg',
      nombre: 'Salmón Cremoso',
      descripcion: 'Filete de Salmón fresco a la parrilla, bañado en salsa cremosa blanca, pasta al pesto y crema de leche, coronado con quinua crocante.',
      precio: 55000,
      ingredientesQuitar: ['Quinua'],
      ingredientesAñadir: [
        { ingrediente: 'Pistachos triturado', precio: 2500 },
        { ingrediente: 'Panko dorado', precio: 2000 }
      ]
    },
    {
      imagen: '../IMAGES/MENUSABORYALMA/ArrozPeruano.jpeg',
      nombre: 'Arroz Peruano de Mariscos',
      descripcion: 'Arroz en diversidad de mariscos a base de ají amarillo y especias peruanas.',
      precio: 60000,
      ingredientesQuitar: ['Mejillones', 'Camarones'],
      ingredientesAñadir: [
        { ingrediente: 'Pulpo', precio: 14000 },
        { ingrediente: 'Langostinos', precio: 9000 },
        { ingrediente: 'Cangrejo', precio: 11000 },
        { ingrediente: 'Almejas', precio: 8000 }
      ]
    },
    {
      imagen: '../IMAGES/MENUSABORYALMA/PescadoTupac.jpg',
      nombre: 'Pescado Tupac',
      descripcion: 'Pescado blanco crocante con camarones bañados en salsa al leño a base de licor, champiñón y panceta, acompañados de papa rústica en cascos.',
      precio: 46000,
      ingredientesQuitar: ['Camarones', 'Champiñón', 'Panceta', 'Papas rusticas'],
      ingredientesAñadir: [
        { ingrediente: 'Alcachofas asadas', precio: 5000 },
        { ingrediente: 'Pulpo a la parrilla', precio: 14000 }
      ]
    },
    {
      imagen: '../IMAGES/MENUSABORYALMA/TallarinesAlEstiloOriental.jpg',
      nombre: 'Tallarines al Estilo Oriental',
      descripcion: 'Tallarines envueltos con pulpo, calamar y camarones acompañados de pimentón, cebolla y ajonjolí bañados en salsa de anguila.',
      precio: 44000,
      ingredientesQuitar: ['Pulpo', 'Calamar', 'Camarones', 'Pimentón', 'Cebolla'],
      ingredientesAñadir: [
        { ingrediente: 'Tofu marinado', precio: 6000 },
        { ingrediente: 'Pollo teriyaki', precio: 6500 },
        { ingrediente: 'Carne de res salteada', precio: 8000 }
      ]
    },
    {
      imagen: '../IMAGES/MENUSABORYALMA/StriploinCertifiedAngusBeef .jpg',
      nombre: 'Striploin Certified Angus Beef',
      descripcion: 'Certified Angus Beef. Acompañantes papas rústicas o a la francesa.',
      precio: 90000,
      ingredientesQuitar: [],
      ingredientesAñadir: [
        { ingrediente: 'Chimichurri', precio: 0 },
        { ingrediente: 'Salsa de tomate', precio: 0 },
        { ingrediente: 'Espárragos salteados', precio: 6000 },
        { ingrediente: 'Tomates asados', precio: 5000 }
      ]
    },
    {
      imagen: '../IMAGES/MENUSABORYALMA/PicanhaCertifiedAngus.jpg',
      nombre: 'Picanha Certified Angus Beef',
      descripcion: 'Certified Angus Beef. Acompañantes papas rústicas o a la francesa.',
      precio: 93000,
      ingredientesQuitar: [],
      ingredientesAñadir: [
        { ingrediente: 'Chimichurri', precio: 0 },
        { ingrediente: 'Salsa de tomate', precio: 0 },
        { ingrediente: 'Espárragos salteados', precio: 6000 },
        { ingrediente: 'Tomates asados', precio: 5000 }
      ]
    },
    {
      imagen: '../IMAGES/MENUSABORYALMA/PulpoSaborYAlma.jpg',
      nombre: 'Pulpo Sabor Y Alma',
      descripcion: 'Pulpo al horno en cocción lenta, encostrado de yuca con parmesano flameado y chimichurri nikkei.',
      precio: 60000,
      ingredientesQuitar: ['Parmessano'],
      ingredientesAñadir: [
        { ingrediente: 'Panko dorado', precio: 2000 },
        { ingrediente: 'Tocino crujiente', precio: 3500 }
      ]
    }
  ];

  // Array de los postres
  const postres = [
    {
        imagen: '../IMAGES/MENUSABORYALMA/CrumbleDeCaramelo.jpg',
        nombre: 'Crumble de Caramelo',
        descripcion: 'Trozos de galleta rellena de caramelo horneada y bañada con caramelo caliente, acompañada de fresas y helado de vainilla.',
        precio: 17000
    },
    {
        imagen: '../IMAGES/MENUSABORYALMA/VolcanDeArequipe.jpg',
        nombre: 'Volcán de Arequipe',
        descripcion: 'Suave masa de galleta rellena de arequipe caliente, acompañado de helado de vainilla.',
        precio: 15500
    },
    {
        imagen: '../IMAGES/MENUSABORYALMA/VolcanDeChocolate.jpg',
        nombre: 'Volcán de Chocolate',
        descripcion: 'Torta de chocolate rellena de chocolate caliente, acompañado de helado de vainilla.',
        precio: 15500
    },
    {
        imagen: '../IMAGES/MENUSABORYALMA/TorreDeCaramelo.jpg',
        nombre: 'Torre de Caramelo',
        descripcion: 'Torre de galletas crocantes, helado artesanal de vainilla y caramelo salado, salsa de caramelo y nuez pecana garrapiñada.',
        precio: 17500
    },
    {
        imagen: '../IMAGES/MENUSABORYALMA/CheescakeFrutosRojos.jpg',
        nombre: 'Cheesecake Frutos Rojos',
        descripcion: 'Crema de cheesecake con base de galleta bañada en salsa de frutos rojos.',
        precio: 13000
    }
];

  
// Función para mostrar las entradas en el contenedor
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
            <button onclick="agregarAlCarrito('${entrada.nombre}', ${entrada.precio})">Agregar al carrito</button>
        `;
        
        contenedor.appendChild(divItem);
    });
  }
  
  // Función para mostrar los platos fuertes en el contenedor
  function mostrarPlatosFuertes() {
    const contenedor = document.getElementById('contenedor-platosFuertes');
    platosFuertes.forEach(platoFuerte => {
        const divItem = document.createElement('div');
        divItem.className = 'item';
        
        divItem.innerHTML = `
            <img src="${platoFuerte.imagen}" alt="${platoFuerte.nombre}">
            <h2>${platoFuerte.nombre}</h2>
            <p>${platoFuerte.descripcion}</p>
            <p>Precio: ${platoFuerte.precio}</p>
            <button onclick="agregarAlCarrito('${platoFuerte.nombre}', ${platoFuerte.precio})">Agregar al carrito</button>
        `;
        
        contenedor.appendChild(divItem);
    });
  }

  //Función para mostrar las entradas
  function mostrarPostres() {
    const contenedor = document.getElementById('contenedor-postres');
    postres.forEach(postre => {
        const divItem = document.createElement('div');
        divItem.className = 'item';
        
        divItem.innerHTML = `
            <img src="${postre.imagen}" alt="${postre.nombre}">
            <h2>${postre.nombre}</h2>
            <p>${postre.descripcion}</p>
            <p>Precio: ${postre.precio}</p>
            <button onclick="agregarAlCarrito('${postre.nombre}', ${postre.precio})">Agregar al carrito</button>
        `;
        
        contenedor.appendChild(divItem);
    });
}
  // Llamar a las funciones para mostrar los platos
  mostrarEntradas();
  mostrarPlatosFuertes();
  mostrarPostres();

  let carrito = [];
  let total = 0;
  
  function agregarAlCarrito(nombre, precio) {
      const productoExistente = carrito.find(producto => producto.nombre === nombre);
      
      if (productoExistente) {
          productoExistente.cantidad++;
          total += precio;
      } else {
          carrito.push({ nombre, precio, cantidad: 1 });
          total += precio;
      }
  
      mostrarCarrito();
      console.log('Producto nuevo agregado al carrito');
  }
  
  function mostrarCarrito() {
      const carritoSection = document.getElementById('carrito');
      carritoSection.innerHTML = '';
  
      carritoSection.innerHTML += `<h2>Tu pedido</h2>`;
  
      carrito.forEach((producto, index) => {
          carritoSection.innerHTML += `
              <div>
                  ${producto.nombre} - $${producto.precio} (Cantidad: ${producto.cantidad})
                  <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
              </div>
          `;
      });
        carritoSection.innerHTML += `<h2>Total: $${total}</h2>
        <button onclick="mostrarDetallesPedido()">Finalizar pedido</button>`;
  }
  
  function eliminarDelCarrito(index) {
      const producto = carrito[index];
      
      if (producto.cantidad > 1) {
          producto.cantidad--;
          total -= producto.precio; 
      } else {
          total -= producto.precio;
          carrito.splice(index, 1);
      }
  
      console.log('Producto eliminado del carrito');
      mostrarCarrito();
  }

  function mostrarDetallesPedido() {
    // Guardar los detalles del pedido en localStorage
    localStorage.setItem('detallesPedido', JSON.stringify(carrito));

    // Redirigir a la nueva página de detalles
    window.location.href = '../HTML/detallesPedido.html';
}