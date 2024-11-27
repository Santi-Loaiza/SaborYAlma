
// Array de objetos que contiene los pedidos
const pedidos = [
    {
        id: 1,
        direccion: "Avenida oriental, Medellin",
        platos: [
            { nombre: "Lomo Sabor y Alma", cantidad: 1 },
            { nombre: "Pescado Tupac", cantidad: 1 }
        ]
    },
    {
        id: 2,
        direccion: "Parque de Itagui, Medellin",
        platos: [
            { nombre: "Pulpo Sabor y Alma", cantidad: 2 }
        ]
    },
    {
        id: 3,
        direccion: "Cra 56 #76-98, Medellin",
        platos: [
            { nombre: "Salmon cremoso", cantidad: 3 }
        ]
    },
    {
        id: 4,
        direccion: "Transversal 4 # 51A - 11",
        platos: [
            { nombre: "Rollitos Heisei", cantidad: 1 },
            { nombre: "Tallarines al Estilo Oriental", cantidad: 1 },
            { nombre: "Crumble de Caramelo", cantidad: 1 }
        ]
    }
  ];
  
  // Función para cargar los pedidos en la página
  function cargarPedidos() {
    const listaPedidos = document.getElementById('pedido-lista');
  
    pedidos.forEach(pedido => {
        const itemPedido = document.createElement('li');
        itemPedido.classList.add('pedido-item');
  
        // Título del pedido
        const titulo = document.createElement('h3');
        titulo.textContent = `Pedido #${pedido.id}`;
        itemPedido.appendChild(titulo);
  
        // Detalles de los platos
        const detallesPlatos = document.createElement('p');
        detallesPlatos.textContent = "Platos: ";
        pedido.platos.forEach(plato => {
            detallesPlatos.textContent += `${plato.cantidad}x ${plato.nombre}, `;
        });
        itemPedido.appendChild(detallesPlatos);
  
        // Dirección de entrega
        const direccion = document.createElement('p');
        direccion.textContent = `Dirección de entrega: ${pedido.direccion}`;
        itemPedido.appendChild(direccion);
  
        // Botón de entrega (deshabilitado)
        const btnEntrega = document.createElement('button');
        btnEntrega.classList.add('btn-entrega');
        btnEntrega.textContent = "Realizar Entrega";
        btnEntrega.disabled = true;  // Botón deshabilitado
        itemPedido.appendChild(btnEntrega);
  
        // Agregar el pedido a la lista
        listaPedidos.appendChild(itemPedido);
    });
  }
  
  // Llamamos a la función para cargar los pedidos cuando cargue la página
  window.onload = cargarPedidos;