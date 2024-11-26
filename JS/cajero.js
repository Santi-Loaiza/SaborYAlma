
const pedidos = [
    {
        mesa: 1,
        total: 153020,
        platos: ["Tostadas Nikkei", "Lomo Selva en Risotto de Ají Amarillo", "Lomo Sabor Y Alma"]
    },
    {
        mesa: 2,
        total: 65000,
        platos: ["Pescado Tupac", "Volcán de Arequipe"]
    },
    {
        mesa: 6,
        total: 256000,
        platos: ["ataki de Atún Trufado", "Pork Bao", "Salmón Cremoso", "Picanha Certified Angus Beef", "Crumble de Caramelo"]
    },
    {
        mesa: 11,
        total: 36000,
        platos: ["Wontones de Salmón", "Cheesecake Frutos Rojos"]
    },
    {
        mesa: 15,
        total: 280500,
        platos: ["Tartar Mixto", "Tornados de Salmón", "Arroz Peruano de Mariscos", "Striploin Certified Angus Beef", "Tallarines al Estilo Oriental", "Volcán de Arequipe"]
    },
    {
        mesa: 3,
        total: 114500,
        platos: ["Rollitos Heisei", "Pollo Trufado", "Cheesecake Frutos Rojos"]
    },
    {
        mesa: 4,
        total: 124000,
        platos: ["Tataki de Atún Trufado", "Salmón Cremoso", "Crumble de Caramelo"]
    },
    {
        mesa: 5,
        total: 98000,
        platos: ["Tornados de Salmón", "Arroz Peruano de Mariscos", "Volcán de Arequipe"]
    },
    {
        mesa: 7,
        total: 111500,
        platos: ["Tostadas Nikkei", "Lomo Sabor Y Alma", "Torre de Caramelo"]
    },
    {
        mesa: 8,
        total: 95000,
        platos: ["Pescado Tupac", "Tallarines al Estilo Oriental", "Volcán de Chocolate"]
    },
    {
        mesa: 9,
        total: 65000,
        platos: ["Wontones de Salmón", "Volcán de Arequipe"]
    },
    {
        mesa: 10,
        total: 80000,
        platos: ["Tartas Mixtas", "Crumble de Caramelo", "Tataki de Atún Trufado"]
    },
    {
        mesa: 12,
        total: 115000,
        platos: ["Pork Bao", "Lomo Selva en Risotto de Ají Amarillo", "Torre de Caramelo"]
    },
    {
        mesa: 13,
        total: 135000,
        platos: ["Salmón Cremoso", "Pulpo Sabor Y Alma", "Cheesecake Frutos Rojos"]
    },
    {
        mesa: 14,
        total: 165000,
        platos: ["Tartar Mixto", "Picanha Certified Angus Beef", "Volcán de Chocolate"]
    }
];

pedidos.forEach((pedido, index) => {
    pedido.id = index + 1;
});

const listaPedidos = document.getElementById('pedido-lista');
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modal-overlay');
const detallePedido = document.getElementById('detalle-pedido');
const cerrarModal = document.getElementById('cerrar-modal');

function mostrarPedidos() {
    pedidos.forEach(pedido => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${pedido.id}</td>
            <td>${pedido.mesa}</td>
            <td>$${pedido.total.toFixed(2)}</td>
            <td><button onclick="abrirModal(${pedido.id})">Ver Detalles</button></td>
        `;
        listaPedidos.appendChild(fila);
    });
}

function abrirModal(id) {
    const pedido = pedidos.find(p => p.id === id);
    if (pedido) {
        const servicio = (pedido.total * 0.10).toFixed(2);
        detallePedido.innerHTML = `
            <p><strong>Platos:</strong> ${pedido.platos.join(", ")}</p>
            <p><strong>Servicio (10%):</strong> $${servicio}</p>
        `;
        modal.style.display = 'block';
        modalOverlay.style.display = 'block';
    }
}

cerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
});

mostrarPedidos();

document.getElementById('cerrarSesionBtn')?.addEventListener('click', function() {
    sessionStorage.removeItem('sesionActiva');
    window.location.href = "../index.html";
});