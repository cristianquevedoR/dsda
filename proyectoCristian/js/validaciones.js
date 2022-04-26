let formulario=document.querySelector(".formulario3");
let inputsFormu=document.querySelectorAll(".rgt2 input");

const expresiones = {
    nombres: /^[a-zA-ZÀ-ÿ\s]{8,}$/,
    apellidos: /^[a-zA-ZÀ-ÿ\s]{4,}$/,
    documento: /^[0-9]{6,}$/,
    direccion: /^[a-zA-ZÀ-ÿ0-9\s\#\.\/\_\-]{7,200}$/,
    telefono: /^[0-9]{10,16}$/,
    cargo: /^[a-zA-Z\s]+$/,

    // Registrar usuario
    nombreUsuario: /^[0-9a-zA-ZÀ-ÿ\s\_\-]{4,}$/,
    password: /^(.*[a-z])(?=.*[A-Z])(?=.*\d)(.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
}
let validarFormulario=(e)=>{
    switch(e.target.name){
        case "Nombre":
            if (expresiones.nombres.test(e.target.value)) {
                document.getElementById("nombres-input").classList.remove("input-incorrecto");
                document.getElementById("nombres-label").classList.remove("label-incorrecto");
                document.getElementById("svg").classList.add("svg-show");
            }else if(e.target.value==""){
                document.getElementById("nombres-input").classList.remove("input-incorrecto");
                document.getElementById("nombres-label").classList.remove("label-incorrecto");
                document.getElementById("svg").classList.remove("svg-show");
            }else{
                document.getElementById("svg").classList.remove("svg-show");
                document.getElementById("nombres-input").classList.add("input-incorrecto");
                document.getElementById("nombres-label").classList.add("label-incorrecto");
            }
        break;
        case "Papellido":
            if(expresiones.apellidos.test(e.target.value)){
                document.getElementById("apellido-input").classList.remove("input-incorrecto");
                document.getElementById("apellido-label").classList.remove("label-incorrecto");
                document.getElementById("svg-apellido").classList.add("svg-show");
            }else if(e.target.value==""){
                document.getElementById("nombres-input").classList.remove("input-incorrecto");
                document.getElementById("nombres-label").classList.remove("label-incorrecto");
                document.getElementById("svg-apellido").classList.remove("svg-show");
            }else{
                document.getElementById("svg-apellido").classList.remove("svg-show");
                document.getElementById("apellido-input").classList.add("input-incorrecto");
                document.getElementById("apellido-label").classList.add("label-incorrecto");
            }
        break;
        case "Sapellido":
            if(expresiones.apellidos.test(e.target.value)){
                document.getElementById("Sapellido-input").classList.remove("input-incorrecto");
                document.getElementById("Sapellido-label").classList.remove("label-incorrecto");
                document.getElementById("svg-Sapellido").classList.add("svg-show");
            }else if(e.target.value==""){
                document.getElementById("nombres-input").classList.remove("input-incorrecto");
                document.getElementById("nombres-label").classList.remove("label-incorrecto");
                document.getElementById("svg-Sapellido").classList.remove("svg-show");
            }else{
                document.getElementById("svg-Sapellido").classList.remove("svg-show");
                document.getElementById("Sapellido-input").classList.add("input-incorrecto");
                document.getElementById("Sapellido-label").classList.add("label-incorrecto");
            }
        break;
        case "Contraseña":
            if(expresiones.password.test(e.target.value)){
                document.getElementById("contraseña-input").classList.remove("input-incorrecto");
                document.getElementById("contraseña-label").classList.remove("label-incorrecto");
                document.getElementById("svg-contraseña").classList.add("svg-show");
            }else if(e.target.value==""){
                document.getElementById("nombres-input").classList.remove("input-incorrecto");
                document.getElementById("nombres-label").classList.remove("label-incorrecto");
                document.getElementById("svg-contraseña").classList.remove("svg-show");
            }else{
                document.getElementById("svg-contraseña").classList.remove("svg-show");
                document.getElementById("contraseña-input").classList.add("input-incorrecto");
                document.getElementById("contraseña-label").classList.add("label-incorrecto");
            }
        break;
        case "Ccontraseña":
            if(document.getElementById("contraseña-input").value==document.getElementById("Ccontraseña-input").value){
                document.getElementById("Ccontraseña-input").classList.remove("input-incorrecto");
                document.getElementById("Ccontraseña-label").classList.remove("label-incorrecto");
                document.getElementById("svg-Ccontraseña").classList.add("svg-show");
            }else if(e.target.value==""){
                document.getElementById("nombres-input").classList.remove("input-incorrecto");
                document.getElementById("nombres-label").classList.remove("label-incorrecto");
                document.getElementById("svg-Ccontraseña").classList.remove("svg-show");
            }else{
                document.getElementById("svg-Ccontraseña").classList.remove("svg-show");
                document.getElementById("Ccontraseña-input").classList.add("input-incorrecto");
                document.getElementById("Ccontraseña-label").classList.add("label-incorrecto");
            }
        break;
    }
}

inputsFormu.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
});