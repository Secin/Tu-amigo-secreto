// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//let listarAmigos=['Karen','María','Alejandra','Martín','Victoria','Pedro'];
var listarAmigos=[];
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
    }
    else{
        let nuevoAmigo=document.getElementById('amigo').value;
        listarAmigos.push(nuevoAmigo);
        limpiarCaja();
        console.log(listarAmigos);
    //funcion listar  amigos
        let listado=document.getElementById('listaAmigos');
         listado.innerHTML="";
         for(i=0;i<listarAmigos.length;i++){
        //console.log(listarAmigos);
            let li= document.createElement("li");
            li.textContent = listarAmigos[i];
            listado.appendChild(li);
        }
        return listarAmigos;
    }

}
//Esta función, genera el Id dinámico para seleccionar la posición del arreglo listarAmigos[]
function sortearAmigo(){
    let idAmigo = Math.floor(Math.random()*listarAmigos.length);
    asignarTextoElemento('#resultado',`El amigo secreto es: ${listarAmigos[idAmigo]}`);
    //console.log(`Id del amigo secreto ess:${listarAmigos[idAmigo]}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    return idAmigo;
}

function mostrarAmigoSecreto(){
    sortearAmigo();
   
    //console.log(idAmigo);
}

function reiniciar(){
//alert("nuevo juevo");
//limpiar caja
//limpiarCaja();
//deshabilitar botón reinicar
listarAmigos=[];
idAmigo=0;
//console.log(`array : ${listarAmigos}`);
asignarTextoElemento('#listaAmigos',`${listarAmigos}`);
asignarTextoElemento('#resultado',``);
//document.querySelector('#reiniciar').setAttribute('disabled','true');
}

//mostrarListaAmigos();
//sortearAmigo();


//console.log(amigoSecreto);