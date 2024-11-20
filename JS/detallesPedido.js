const detallesPedido = JSON.parse(localStorage.getItem('detallesPedido')) || []; // Asegurarse de que no sea null

        let costoProductos = 0;

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
        }

        function cerrarModal() {
            document.getElementById('modalDireccion').style.display = 'none';
        }

        document.getElementById('direccionForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const direccion = document.getElementById('direccion').value;

            document.getElementById('mensajeCarga').style.display = 'block';

            setTimeout(() => {
                document.getElementById('mensajeCarga').style.display = 'none';

                // Mostrar el mensaje de éxito
                document.getElementById('mensajeExito').style.display = 'block';

                // Mostrar la información del pedido junto con la dirección de entrega
                const resumenPedido = `
                    <h2>Resumen de tu Pedido</h2>
                    <div id="detallesPedidoResumen"></div>
                    <h4>Dirección de Entrega: ${direccion}</h4>
                `;

                // Limpiar el contenido anterior y agregar el resumen
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

                // Cerrar el modal
                cerrarModal();
            }, 3000); // 3000 milisegundos = 3 segundos
        });