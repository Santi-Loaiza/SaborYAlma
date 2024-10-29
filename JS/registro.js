const nombresGuardado = localStorage.getItem('nombres');
const usuarioGuardado = localStorage.getItem('usuario');
const apellidosGuardado = localStorage.getItem('apellidos');
const contraseñaGuardado = localStorage.getItem('contraseña');

// Registrar nuevo usuario
document.getElementById('registrarBtn')?.addEventListener('click', function(){
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
    const nuevoUsuario = document.getElementById('usuario-email').value;
    const nuevoContraseña = document.getElementById('contraseña').value;

    //Guardar los datos en local Storage
    if(nuevoUsuario && nuevoContraseña) {
        localStorage.setItem('usuario', nuevoUsuario);
        localStorage.setItem('contraseña', nuevoContraseña);
        alert('Usuario registrado con éxito');
        window.location.href="../HTML/iniciarSesion.html"
    }else{
        alert('Por favor ingrese todos los campos');
    }
})

//Iniciar sesion
document.getElementById('iniciarSesionBtn')?.addEventListener('click', function(){
    const usuario = document.getElementById('loginUsuario').value;
    const contraseña = document.getElementById('loginContraseña').value;

    if(usuario === usuarioGuardado && contraseña === contraseñaGuardado) {
        event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
        //Guardar en el session Storage
        sessionStorage.setItem('sesionActiva',true);
        alert('Sesión iniciada con éxito');
        window.location.href="../HTML/paginaTemporalCerrarSesion.html"
        }else{
            alert('Usuario o contraseña incorrectos');
    }
})

//Cerrar sesion
document.getElementById('cerrarSesionBtn')?.addEventListener('click', 
    function(){
        sessionStorage.removeItem('SesionActiva');
        window.location.href="../index.html"
    }
)
