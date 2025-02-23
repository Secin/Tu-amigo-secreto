// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//let listarAmigos=['Karen','María','Alejandra','Martín','Victoria','Pedro'];
const listarAmigos=[];
let amigoSecreto= '';
let idAmigo= 0;

function asignarTextoElemento(Elemento, texto){
    let elementoHTML =document.querySelector(Elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function agregarAmigo(){
    //
    //validar sí el campo no está vacío
    if((document.getElementById('amigo').value)== ''){
    alert('Campo esta vacío');
    }else{
        let nuevoAmigo=document.getElementById('amigo').value;
        listarAmigos.push(nuevoAmigo);
        limpiarCaja();
        console.log(listarAmigos);
        asignarTextoElemento('#listaAmigos',`Lista de amigos son: ${listarAmigos}`);
        //alert(`el nuevo amigo ingresado es: ${nuevoAmigo}`);
        return listarAmigos;
    }
    //
   // listarAmigos=[nuevoAmigo];
    //console.log(nuevoAmigo);
}
//Esta función, genera el Id dinámico para seleccionar la posición del arreglo listarAmigos[]
function sortearAmigo(){
    let idAmigo = Math.floor(Math.random()*listarAmigos.length);
    asignarTextoElemento('#resultado',`El amigo secreto es: ${listarAmigos[idAmigo]}`);
    //console.log(`Id del amigo secreto ess:${listarAmigos[idAmigo]}`);
    return idAmigo;
}

function mostrarAmigoSecreto(){
    sortearAmigo();
   
    //console.log(idAmigo);
}


//mostrarListaAmigos();
//sortearAmigo();


//console.log(amigoSecreto);