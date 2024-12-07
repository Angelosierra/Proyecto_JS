//PROGRAMACION DE TRANSICION DE AMBOS FORMULARIOS
const signUpButton=document.getElementById("signUp"); //boton de registro
const signInButton=document.getElementById("signIn");//boton ingreso
const container=document.getElementById("container");
const boost=document.getElementById("boost");
//programar evento click mostrar formulario registro
signUpButton.addEventListener("click",() =>{
    container.classList.add("right-panel-active");
    boost.style.visibility="hidden";
});
//programar evento click ocultar form registro
signInButton.addEventListener("click", ()=>{
    container.classList.remove("right-panel-active");
    boost.style.visibility="visible";
});
//mostrar contraseña
function mostrarSeña(){
    var tipo=document.getElementById("seña");
    if(tipo.type=="password"){
        tipo.type="text";
    }else{
        tipo.type="password";
    }
}