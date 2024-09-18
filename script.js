let area = document.getElementById("cuadrotexto");
area.style.resize = "none";
let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
//Oculto el menu despues de seleccionar
function seleccionar(){
    document.getElementById("nav").classList ="";
    menuVisible = false;
}
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("sql");
        habilidades[4].classList.add("cpp");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajoequipo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyectmanag");
    }
}
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'CV.pdf';
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function enviar() {
    // Obtén los valores de los campos
    var nombre = document.querySelector('input[placeholder="Tu Nombre"]').value;
    var telefono = document.querySelector('input[placeholder="Numero telefonico"]').value;
    var correo = document.querySelector('input[placeholder="Direccion de correo"]').value;
    var tema = document.querySelector('input[placeholder="Tema"]').value;
    var mensaje = document.querySelector('textarea[placeholder="Mensaje"]').value;

    // Envía el correo usando EmailJS
    emailjs.send("service_jmkbiyg", "template_jsg3gmg", {
    from_name: nombre,
    from_phone: telefono,
    from_email: correo,
    subject: tema,
    message: mensaje
    }).then(function(response) {
        console.log("Éxito:", response);
        alert("¡Mensaje enviado con éxito!");
    }).catch(function(error) {
        console.log("Error:", error);
        alert("Hubo un problema al enviar el mensaje.");
    });
}