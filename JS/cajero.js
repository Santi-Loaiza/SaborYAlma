
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

// Asignar ID a cada pedido
pedidos.forEach((pedido, index) => {
    pedido.id = index + 1;
});

const listaPedidos = document.getElementById('pedido-lista');
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modal-overlay');
const detallePedido = document.getElementById('detalle-pedido');
const cerrarModal = document.getElementById('cerrar-modal');

const modalPago = document.getElementById('modal-pago');
const modalPagoOverlay = document.getElementById('modal-pago-overlay');
const cerrarModalPago = document.getElementById('cerrar-modal-pago');
const formPago = document.getElementById('form-pago');
const montoPagoInput = document.getElementById('monto-pago');
const pedidoIdPagoInput = document.getElementById('pedido-id-pago');
const metodoPagoInput = document.getElementById('metodo-pago');

function mostrarPedidos() {
    pedidos.forEach(pedido => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${pedido.id}</td>
            <td>${pedido.mesa}</td>
            <td>$${pedido.total.toFixed(2)}</td>
            <td><button onclick="abrirModal(${pedido.id})">Ver Detalles</button></td>
            <td><button onclick="abrirModalPago(${pedido.id})">Registrar Pago</button></td>
        `;
        listaPedidos.appendChild(fila);
    });
}

function abrirModal(id) {
    const pedido = pedidos.find(p => p.id === id);
    if (pedido) {const servicio = (pedido.total * 0.10).toFixed(2);
        detallePedido.innerHTML = `
            <p><strong>Platos:</strong> ${pedido.platos.join(", ")}</p>
            <p><strong>Servicio (10%):</strong> $${servicio}</p>
        `;
        modal.style.display = 'block';
        modalOverlay.style.display = 'block';
    }}

    function abrirModalPago(id) {
        const pedido = pedidos.find(p => p.id === id);
        if (pedido) {
            pedidoIdPagoInput.value = id; // Guardar el ID del pedido en un campo oculto
            montoPagoInput.value = pedido.total.toFixed(2); // Establecer el monto a pagar
            metodoPagoInput.value = ""; // Limpiar la selección del método de pago
            modalPago.style.display = 'block';
            modalPagoOverlay.style.display = 'block';
        }
    }
    

cerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
});

cerrarModalPago.addEventListener('click', () => {
    modalPago.style.display = 'none';
    modalPagoOverlay.style.display = 'none';
});

formPago.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir el envío del formulario
    const id = parseInt(pedidoIdPagoInput.value);
    const montoPago = parseFloat(montoPagoInput.value);
    const metodoPago = metodoPagoInput.value;

    // Aquí puedes agregar la lógica para registrar el pago, como actualizar el estado del pedido
    console.log(`Pago registrado para el pedido ID ${id}: $${montoPago.toFixed(2)} con método ${metodoPago}`);

    // Cambiar el contenido del modal para indicar que el pedido ha sido pagado
    modalPago.innerHTML = `
        <h2>Pago Registrado</h2>
        <p>El pedido ID ${id} ha sido pagado con un monto de $${montoPago.toFixed(2)} usando el método de pago: ${metodoPago}.</p>
        <button type="button" id="cerrar-modal-pago">Cerrar</button>
    `;

    // Reasignar el evento de cerrar modal al nuevo botón
    document.getElementById('cerrar-modal-pago').addEventListener('click', () => {
        modalPago.style.display = 'none';
        modalPagoOverlay.style.display = 'none';
    });
});

mostrarPedidos();

document.getElementById('cerrarSesionBtn')?.addEventListener('click', function() {
    sessionStorage.removeItem('sesionActiva');
    window.location.href = "../index.html";
});
