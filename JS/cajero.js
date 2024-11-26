
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