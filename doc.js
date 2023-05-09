// función para quitar la selección de sección actual //

function seleccionar(link){
  var opciones = document.querySelectorAll('#links a');
  opciones[0].className = ""
  opciones[1].className = ""
  opciones[2].className = ""
  opciones[3].className = ""
  opciones[4].className = ""
  link.className = "seleccionado";
  
  // desaparecer después de seleccionar//
  
  var x = document.getElementById("nav");
  x.className = "";
}

// función del menú responsive//

function responsiveMenu(){
var x = document.getElementById("nav")
if (x.className=== ""){
   x.className = "responsive";
  }else{
    x.className = "";
  }
  
}

// detecta el scrolling para activar la animación //

window.onscroll = function(){
  efectoHabilidades();
}


//funcion que aptica la animaciön de la barra de habilidades//
function efectoHabilidades() { 
     var skills = document.getElementById("habilidad");
     var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
     if (distancia_skills >= 300) {
       
       document.getElementById("html").classList.add("barra-progreso1");
       document.getElementById("js").classList.add("barra-progreso2");
       document.getElementById("ps").classList.add("barra-progreso3");
       document.getElementById("ia").classList.add("barra-progreso4");
       document.getElementById("bd").classList.add("barra-progreso5");
     }


}