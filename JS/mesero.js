const reservas = [
  {
      numeroPersonas: 4,
      fechaReserva: "2024-11-25",
      horaReserva: "19:30",
      observaciones: "Mesa junto a la ventana"
  },
  {
      numeroPersonas: 2,
      fechaReserva: "2024-11-26",
      horaReserva: "21:00",
      observaciones: "Celebración de aniversario"
  },
  {
      numeroPersonas: 6,
      fechaReserva: "2024-11-27",
      horaReserva: "20:00",
      observaciones: "Petición de menú vegetariano"
  },
  {
      numeroPersonas: 3,
      fechaReserva: "2024-11-28",
      horaReserva: "21:00",
      observaciones: "Cumpleaños"
  },
  {
      numeroPersonas: 10,
      fechaReserva: "2024-11-27",
      horaReserva: "20:30",
      observaciones: ""
  },
  {
      numeroPersonas: 8,
      fechaReserva: "2024-11-25",
      horaReserva: "20:30",
      observaciones: ""
  },
  {
      numeroPersonas: 5,
      fechaReserva: "2024-11-25",
      horaReserva: "21:00",
      observaciones: "Cena romantica"
  }
];

let indiceReservaSeleccionada; // Variable global para almacenar el índice de la reserva

function mostrarReservas() {
  const listaReservas = document.getElementById('reservas-lista');
  listaReservas.innerHTML = '';

  reservas.forEach((reserva, index) => {
      const reservaDiv = document.createElement('div');
      reservaDiv.classList.add('reserva');

      reservaDiv.innerHTML = `
          <p><strong>Número de personas:</strong> ${reserva.numeroPersonas}</p>
          <p><strong>Fecha de reserva:</strong> ${reserva.fechaReserva}</p>
          <p><strong>Hora de reserva:</strong> ${reserva.horaReserva}</p>
          <p><strong>Observaciones:</strong> ${reserva.observaciones}</p>
          <button class="recibirReservaindividualBtn" data-index="${ index}">Recibir reserva</button>
      `;

      listaReservas.appendChild(reservaDiv);
  });

  const botonesRecibir = document.querySelectorAll('.recibirReservaindividualBtn');
  botonesRecibir.forEach(boton => {
      boton.addEventListener('click', function() {
          const index = this.getAttribute('data-index');
          cargarFormulario(index);
          abrirModal();
      });
  });
}

function cargarFormulario(index) {
  const reserva = reservas[index];
  if (reserva) {
      indiceReservaSeleccionada = index; // Actualiza la variable global
      document.getElementById('reserva-id').textContent = index; 
      document.getElementById('totalPersonas').value = reserva.numeroPersonas;
  } else {
      alert("Reserva no encontrada.");
  }
}

function finalizarRecibimiento() {
  const personasLlegadas = document.getElementById('personasLlegadas').value;
  const reserva = reservas[indiceReservaSeleccionada]; // Accede a la reserva usando el índice global

  if (personasLlegadas > 0 && personasLlegadas <= reserva.numeroPersonas) {
      setTimeout(function() {
          document.getElementById('modalFormulario').style.display = 'none';
          document.getElementById('mensaje').style.display = 'block';
      }, 3000); // Espera de 3 segundos antes de mostrar el mensaje de éxito
  } else {
      alert("Por favor, ingresa un número valido de las personas que llegaron.");
  }
}

function abrirModal() {
  document.getElementById('modalFormulario').style.display = 'block';
}

function cerrarModal() {
  document.getElementById('modalFormulario').style.display = 'none';
}

// Llamar a la función para mostrar las reservas al cargar la página
mostrarReservas();