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
      },{
        numeroPersonas: 8,
        fechaReserva: "2024-11-25",
        horaReserva: "20:30",
        observaciones: ""
      },{
        numeroPersonas: 5,
        fechaReserva: "2024-11-25",
        horaReserva: "21:00",
        observaciones: "Cena romantica"
      }
  ];
 
  // Función para mostrar las reservas en la página
  function mostrarReservas() {
    const listaReservas = document.getElementById('reservas-lista');
   
    // Limpiar la lista existente (en caso de que se actualicen las reservas)
    listaReservas.innerHTML = '';
 
    // Iterar sobre el array de reservas
    reservas.forEach((reserva) => {
      // Crear un nuevo div para cada reserva
      const reservaDiv = document.createElement('div');
      reservaDiv.classList.add('reserva');
     
      // Crear contenido de la reserva
      reservaDiv.innerHTML = `
        <p><strong>Número de personas:</strong> ${reserva.numeroPersonas}</p>
        <p><strong>Fecha de reserva:</strong> ${reserva.fechaReserva}</p>
        <p><strong>Hora de reserva:</strong> ${reserva.horaReserva}</p>
        <p><strong>Observaciones:</strong> ${reserva.observaciones}</p>
      `;
     
      // Agregar la reserva a la lista
      listaReservas.appendChild(reservaDiv);
    });
  }
 
  // Llamar a la función para mostrar las reservas al cargar la página
  mostrarReservas();