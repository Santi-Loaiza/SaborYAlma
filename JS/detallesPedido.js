const detallesPedido = JSON.parse(localStorage.getItem('detallesPedido')) || [];
const direcciones = JSON.parse(localStorage.getItem('direcciones')) || [];

let costoProductos = 0;
let direccionSeleccionada = '';

detallesPedido.forEach(producto => {
    costoProductos += producto.precio * producto.cantidad;

    document.getElementById('detallesPedido').innerHTML += `
        <div>
            ${producto.nombre} - $${producto.precio} (Cantidad: ${producto.cantidad}) - Total: $${producto.precio * producto.cantidad}
        </div>
    `;
});

let tarifaDomicilio = costoProductos * 0.08;
if (tarifaDomicilio < 2000) {
    tarifaDomicilio = 2000;
}
let tarifaServicio = costoProductos * 0.06;
if (tarifaServicio < 3000) {
    tarifaServicio = 3000;
}

document.getElementById('detallesPedido').innerHTML += `<h4>Costo de los productos: $${costoProductos}</h4>`;
document.getElementById('detallesPedido').innerHTML += `<h4>Tarifa de domicilio: $${tarifaDomicilio}</h4>`;
document.getElementById('detallesPedido').innerHTML += `<h4>Tarifa de servicio: $${tarifaServicio}</h4>`;

let total = costoProductos + tarifaDomicilio + tarifaServicio;
document.getElementById('detallesPedido').innerHTML += `<h2>Total: $${total}</h2>`;

function mostrarModal() {
    document.getElementById('modalDireccion').style.display = 'block';
    mostrarDirecciones();
}

function cerrarModal() {
    document.getElementById('modalDireccion').style.display = 'none';
}

function mostrarDirecciones() {
    const listaDirecciones = document.getElementById('listaDirecciones');
    listaDirecciones.innerHTML = '';

    direcciones.forEach((direccion, index) => {
        listaDirecciones.innerHTML += `
            <div class="direccion-item" onclick="seleccionarDireccion('${direccion}')">
                <span>${direccion}</span>
                <button onclick="eliminarDireccion(${index}); event.stopPropagation();">Eliminar</button>
                <button onclick="modificarDireccion(${index}); event.stopPropagation();">Modificar</button>
            </div>
        `;
    });

    // Mostrar el botón de finalizar pedido solo si hay direcciones
    document.getElementById('finalizarPedido').style.display = direcciones.length > 0 ? 'block' : 'none';
}

function seleccionarDireccion(direccion) {
    direccionSeleccionada = direccion; 
    alert(`Dirección seleccionada: ${direccion}`); 
}

document.getElementById('direccionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nuevaDireccion = document.getElementById('direccion').value;
    direcciones.push(nuevaDireccion);
    localStorage.setItem('direcciones', JSON.stringify(direcciones)); // Guardar en localStorage

    document.getElementById('direccion').value = ''; 
    mostrarDirecciones(); 
});

function eliminarDireccion(index) {
    direcciones.splice(index, 1); 
    localStorage.setItem('direcciones', JSON.stringify(direcciones));
    mostrarDirecciones(); 
}

function modificarDireccion(index) {
    const nuevaDireccion = prompt("Ingresa la nueva dirección:", direcciones[index]);
    if (nuevaDireccion) {
        direcciones[index] = nuevaDireccion;
        localStorage.setItem('direcciones', JSON.stringify(direcciones)); // Actualizar localStorage
        mostrarDirecciones(); // Actualizar la lista de direcciones
    }
}

function finalizarPedidoDesdeModal() {
    if (!direccionSeleccionada) {
        alert ("Por favor, selecciona una dirección antes de finalizar el pedido.");
        return;
    }

    //mensaje de espera
    document.getElementById('modalDireccion').innerHTML = `<h2 style="color: white; text-align: center; margin-top: 400px; font-size: 3rem">Finalizando pedido...</h2>`;

    const resumenPedido = `
        <h2>Resumen de tu Pedido</h2>
        <div id="detallesPedidoResumen"></div>
        <h4>Dirección de Entrega: ${direccionSeleccionada}</h4>
    `;

    document.getElementById('detallesPedido').innerHTML = resumenPedido;

    detallesPedido.forEach(producto => {
        document.getElementById('detallesPedido').innerHTML += `
            <div>
                ${producto.nombre} - $${producto.precio} (Cantidad: ${producto.cantidad}) - Total: $${producto.precio * producto.cantidad}
            </div>
        `;
    });

    document.getElementById('detallesPedido').innerHTML += `<h4>Costo de los productos: $${costoProductos}</h4>`;
    document.getElementById('detallesPedido').innerHTML += `<h4>Tarifa de domicilio: $${tarifaDomicilio}</h4>`;
    document.getElementById('detallesPedido').innerHTML += `<h4>Tarifa de servicio: $${tarifaServicio}</h4>`;
    document.getElementById('detallesPedido').innerHTML += `<h2>Total: $${total}</h2>`;

    setTimeout(() => {
        // Mostrar mensaje de éxito
        document.getElementById('detallesPedido').innerHTML = `
            <h1>Pedido realizado con éxito!</h1>
            <h4>Detalles del Pedido:</h4>
            <div id="detallesPedidoFinal"></div>
            <h4>Dirección de Entrega: ${direccionSeleccionada}</h4>
        `;

        detallesPedido.forEach(producto => {
            document.getElementById('detallesPedidoFinal').innerHTML += `
                <div>
                    ${producto.nombre} - $${producto.precio} (Cantidad: ${producto.cantidad}) - Total: $${producto.precio * producto.cantidad}
                </div>
            `;
        });

        document.getElementById('detallesPedidoFinal').innerHTML += `<h4>Costo de los productos: $${costoProductos}</h4>`;
        document.getElementById('detallesPedidoFinal').innerHTML += `<h4>Tarifa de domicilio: $${tarifaDomicilio}</h4>`;
        document.getElementById('detallesPedidoFinal').innerHTML += `<h4>Tarifa de servicio: $${tarifaServicio}</h4>`;
        document.getElementById('detallesPedidoFinal').innerHTML += `<h2>Total: $${total}</h2>`;

        cerrarModal(); 
    }, 3000);
}