
//---------------------------------------------------------
//header

if(document.querySelector("header")){
    document.querySelector("header").innerHTML = `
        <!--titulo-->
        <div class="header_titulo">
        <img src="./img/icono.png" alt="proyecto_animales" title="proyecto_animales" class="header_icono">
        <h1>PROYECTO ANIMALES</h1>
        <img src="./img/icono.png" alt="proyecto_animales" title="proyecto_animales" class="header_icono">
        </div>
        <!--barra de navegación del header-->
        <nav class="navegation">
            <ul>
                <li><a href="./index.html">INICIO</a></li>
                <li class="dropdown">
                <a href="./adopcion.html" class="dropbtn">ADOPCIÓN</a>
                <div class="dropdown-content">
                    <a href="./conocelos.html">CONOCELOS</a>
                    <a href="./adopcion.html">REQUISITOS DE ADOPCIÓN</a>
                </div>
                </li>
                <li><a href="./donacion.html">DONACIÓN</a></li>
                <li><a href="./contacto.html">CONTACTO</a></li>
                <li><a href="./login.html">INGRESAR</a></li>
            </ul>     
        </nav>
    `;
}

//---------------------------------------------------------
//footer

if(document.querySelector("footer")){
    document.querySelector("footer").innerHTML = `
        <div class="contenedor ">
        <div class="footer_item">
        <div class="footer_proyecto">
            <img src="./img/icono.png" alt="proyecto_animales" title="proyecto_animales" class="footer_icono">
            <h3>PROYECTO ANIMALES</h3>
            <div class="social_media">
            <a href="https://www.instagram.com/" target="_blank"><img src="./img/instagram.png" alt="instagram" title="instagram"></a>
            <a href="https://www.facebook.com/?locale=es_LA" target="_blank"><img src="./img/facebook.png" alt="facebook" title="facebook"></a>
            <a href="https://www.tiktok.com/" target="_blank"><img src="./img/tik-tok.png" alt="tik-tok" title="tik-tok"></a>
            <a href="https://twitter.com/" target="_blank"><img src="./img/logotipos.png" alt="twitter" title="twitter"></a>
            </div>
        </div>
        </div>
        <div class="footer_item">
        <nav class="footer_nav">
            <a href="./index.html">INICIO</a>
            <a href="./adopcion.html">ADOPCIÓN</a>
            <a href="./donacion.html">DONACIÓN</a>
            <a href="./contacto.html">CONTACTO</a></li>
            <a href="./login.html">INGRESAR</a></li>              
        </nav>
        </div>
        <div class="footer_item novedades">
        <div class="footer_novedades">
            <form action="">
            <div class="footer_input" onsubmit="return quiere_novedades()">

                <label for="">¡Recibí las novedades en tu e-mail!</label>

                <input type="email" name="" id="email_novedades" placeholder="Ingresá tu e-mail" required="true">
            </div>  
            <button type="submit" class="boton">¡SUSCRIBIRME!</button>
            </form>
        </div>
        </div>
        <div class="copyright">
        <p>PROYECTO ANIMALES © 2024</p>
        </div>
        </div>
    `;
}


//---------------------------------------------------------

//---------------------------------------------------------
//registracion
if(document.querySelector(".registracion")){

    // Previsualizacion de imagen
    let avatar = document.getElementById("imagenPerfil");
    let imagen = document.getElementById("avatarPreview");
 

    avatar.addEventListener("change", e => {
        console.log(e);
        if(e.target.files[0]){
            let reader = new FileReader();
            reader.onload = function(e){
                imagen.src=e.target.result;
            }
            reader.readAsDataURL(e.target.files[0]);

        }

    });

    function validar_registracion(){
        //me traigo los valores del html
        let imagen = document.getElementById("imagenPerfil");
        let nombre = document.getElementById("nombre");
        let apellido = document.getElementById("apellido")
        let email = document.getElementById("email");
        let telefono = document.getElementById("telefono");
        let fecha = document.getElementById("fechaNac");
        let genero = document.getElementById("genero");
        let genero_seleccionado = genero.options[genero.selectedIndex].value;
        let usuario = document.getElementById("usernameReg");
        let password = document.getElementById("passwordReg");
        let repPassword = document.getElementById("repPassword");
        let terminos = document.getElementById("terminos");

        let error = false;

        //expreciones regulares
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        let telefonoRegex = /^\d{10}$/;

        //imagen
        if(imagen.files.length === 0){
            document.getElementById("validar_imagen").innerHTML="Seleccione una imagen";
            error = true;
        }else{
            document.getElementById("validar_imagen").innerHTML="";
        }


        //nombre
        if(nombre.value.trim() == 0){
            document.getElementById("validar_nombre").innerHTML = "Complete su nombre";
            error = true; // Evitar que el formulario se envíe si la validación falla
        }else{
            document.getElementById("validar_nombre").innerHTML="";
        }

        //apellido
        if(apellido.value.trim() == 0){
            document.getElementById("validar_apellido").innerHTML = "Complete su apellido";
            error = true; // Evitar que el formulario se envíe si la validación falla
        }else{
            document.getElementById("validar_apellido").innerHTML="";
        }
        

        //email
        if(!emailRegex.test(email.value)){
            document.getElementById("validar_email").innerHTML = "Formato de mail incorrecto";
            error = true; // Evitar que el formulario se envíe si la validación falla
        }else{
            document.getElementById("validar_email").innerHTML="";
        }

        //telefono
        if(!telefonoRegex.test(telefono.value)) {
            document.getElementById("validar_telefono").innerHTML = "Código de área + celular [sin 15, sin espacios y sin caracteres especiales]";
            error = true;
        }else{
            document.getElementById("validar_telefono").innerHTML ="";
        }

        //fecha de nacimiento
        if(fecha.value === ""){
            document.getElementById("validar_fecha").innerHTML = "Seleccione su fecha de nacimiento";
            error = true; // Evitar que el formulario se envíe si la validación falla
        }else{
            document.getElementById("validar_fecha").innerHTML="";
        }

        //genero
        if(genero_seleccionado === ""){
            document.getElementById("validar_genero").innerHTML = "Seleccione una opción";
            error = true;
        }else{
            document.getElementById("validar_genero").innerHTML ="";
        }

        //usuario
        if(usuario.value.trim() == 0){
            document.getElementById("validar_usuario").innerHTML = "Complete el usuario";
            error = true; // Evitar que el formulario se envíe si la validación falla
        }else{
            document.getElementById("validar_usuario").innerHTML="";
        }

        //contraseña
        if(password.value.length < 8 || !passwordRegex.test(password.value)) {
            document.getElementById("validar_password").innerHTML = "La clave debe contener al menos ocho caracteres, una mayúscula, una minúscula, un número y un carácter especial";
            error = true;
        }else{
            document.getElementById("validar_password").innerHTML ="";
        }

        //repetir contraseña
        if(repPassword.value != password.value){
            document.getElementById("validar_rep_password").innerHTML = "Las claves no coinciden";
            error = true;
        }else{
            document.getElementById("validar_rep_password").innerHTML = "";
        }

        //terminos y condiciones
        if(terminos.checked === false){
            document.getElementById("validar_terminos").innerHTML = "Por favor acepte los términos y condiciones";
            error = true;
        }else{
            document.getElementById("validar_terminos").innerHTML = "";
        }


        if (error == false) {
            alert("Gracias por registrarte!");
            window.location.href = "./index.html";
            return error;
            
        }
        return !error;
    }
}

//---------------------------------------------------------
//login
if(document.querySelector(".login")){
    function validar_ingreso(){
        let usuario = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let error = false;

        //usuario
        if(usuario.trim() == 0 ){
            document.getElementById("validar_login_usuario").innerHTML = "Ingrese el usuario";
            error = true;
        }else{
            document.getElementById("validar_login_usuario").innerHTML = "";
        }

        //contraseña
        if(password.trim() == 0 ){
            document.getElementById("validar_login_password").innerHTML = "Ingrese la contraseña";
            error = true;
        }else{
            document.getElementById("validar_login_password").innerHTML = "";
        }

        if (error == false) {
            sessionStorage.setItem("usuario", usuario);
            sessionStorage.setItem("password", password);
            alert("Bienvenido!");
            window.location.href = "./index.html";
            return error;
            
        }
        return !error;
        //false;
    }
}


//---------------------------------------------------------
//recuperacion
if(document.querySelector(".recuperacion")){
    function validar_recuperacion(){
        let dato = document.getElementById("recuperacion").value;
        let error = false;

        //si no se envio nada
        if(dato.trim() == 0){
            document.getElementById("validar_recuperacion").innerHTML = "Ingrese correro, teléfono o usuario";
            error = true;
        }else{
            document.getElementById("validar_recuperacion").innerHTML = "";
        }

        if (error == false) {
            alert("Se envió enlace de recuperación");
            window.location.href = "./index.html";
            return error;        
        }
        return !error;
    }
}


//---------------------------------------------------------
//contacto
if(document.querySelector(".contacto_formulario")){
    function validar_contacto(){
        //valores de html
        let nombre_apellido = document.getElementById("nombre_apellido").value;
        let mensaje = document.getElementById("mensaje").value;
        let email = document.getElementById("email_contacto").value;
        let area = document.getElementById("area_contacto");
        let area_seleccionada = area.options[area.selectedIndex].value;

        error = false;

        //expreciones regulares
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        //nombre
        if(nombre_apellido.trim() == 0){
            document.getElementById("validar_nombre_apellido").innerHTML = "Complete su nombre";
            error = true; // Evitar que el formulario se envíe si la validación falla
        }else{
            document.getElementById("validar_nombre_apellido").innerHTML="";
        }

       //email
        if(!emailRegex.test(email)){
            document.getElementById("validar_email_contacto").innerHTML = "Ingrese un mail con formato correcto";
            error = true; // Evitar que el formulario se envíe si la validación falla
        }else{
            document.getElementById("validar_email_contacto").innerHTML="";
        }

        //area
        if(area_seleccionada === ""){
            document.getElementById("validar_area").innerHTML = "Seleccione un área";
            error = true;
        }else{
            document.getElementById("validar_area").innerHTML ="";
        }

        //si no se envio nada
        if(mensaje.trim() == 0){
            document.getElementById("validar_mensaje_contacto").innerHTML = "Ingrese mensaje a enviar";
            error = true; // Evitar que el formulario se envíe si la validación falla
        }else{
            document.getElementById("validar_mensaje_contacto").innerHTML="";
        }

        if (error == false) {
            alert("Gracias por tu consulta! Pronto te estaremos respondiendo");
            window.location.href = "./index.html";
            return error;        
        }

        return !error;
    }
}




