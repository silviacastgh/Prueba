
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
                <li class="dropdown">
                    <a href="./donacion.html" class="dropbtn">DONAR</a>
                    <div class="dropdown-content">
                    <a href="donacion.html">DONACIONES ECONÓMICAS</a>
                    <a href="#">DONACIONES DE INSUMOS</a>
                    </div>
                </li>
                <li><a href="./tienda.html">PET SHOP</a></li>
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
            <a href="./donacion.html">DONAR</a>
            <a href="./tienda.html">PET SHOP</a></li>
            <a href="./contacto.html">CONTACTO</a></li>
            <a href="./login.html">INGRESAR</a></li>              
        </nav>
        </div>
        <div class="footer_item novedades">
        <div class="footer_novedades">
            <form action="">
            <div class="footer_input">

                <label for="">¡Recibí las novedades en tu e-mail!</label>

                <input type="email" name="" id="" placeholder="Ingresá tu e-mail" required="true">
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
//conocelos

if(document.querySelector(".contenedor_tarjeta")){

    //json de gatos
    let animales = [        
        {
            id: 1,
            nombre: "Rick",
            estado: "castrado",
            edad: "3",
            genero: "Male",
            imagen: "https://cdn2.thecatapi.com/images/9vt.jpg",
            creado: "2017-11-04T18:48:46.250Z"
        },
        {
            id: 2,
            nombre: "Mory",
            estado: "sin castrar",
            edad: "4",
            genero: "Male",
            imagen: "https://cdn2.thecatapi.com/images/au5.jpg",
            creado: "2017-11-04T18:50:21.651Z"
        },
        {
            id: 3,
            nombre: "Summer",
            estado: "castrado",
            edad: "2",
            genero: "Female",
            imagen: "https://cdn2.thecatapi.com/images/b7d.jpg",
            creado: "2017-11-04T19:09:56.428Z"
        },
        {
            id: 4,
            nombre: "Beth",
            estado: "castrado",
            edad: "5",
            genero: "Female",
            imagen: "https://cdn2.thecatapi.com/images/cdi.jpg",
            creado: "2017-11-04T19:22:43.665Z"
        },
        {
            id: 5,
            nombre: "Jerry",
            estado: "castrado",
            edad: "7",
            genero: "Male",
            imagen: "https://cdn2.thecatapi.com/images/dte.jpg",
            creado: "2017-11-04T19:26:56.301Z"
        },
        {
            id: 6,
            nombre: "Jenny",
            estado: "castrado",
            edad: "4",
            genero: "Female",
            imagen: "https://cdn2.thecatapi.com/images/MTc5OTc4Ng.jpg",
            creado: "2017-11-04T19:26:56.301Z"
        },
        {
        id: 7,
        nombre: "Jerry",
        estado: "castrado",
        edad: "2",
        genero: "Male",
        imagen: "https://cdn2.thecatapi.com/images/yqcbOxkWK.jpg",
        creado: "2017-11-04T19:26:56.301Z"
    }
    ];

    //variable que contendrá las tarjetas
    let cad = ``;

    //recorro el arreglo de animales y creo las tarjetas
    for (let animal of animales) {
    cad = cad + `
        <div class="tarjeta">
            <div class="tarjeta_imagen">      
                <img src="${animal.imagen}" alt="${animal.nombre}">
            </div>
            <div class="tarjeta_cuerpo">
                <p>Nombre: ${animal.nombre}</p>
                <p>Estado: ${animal.estado}</p>
                <p>Edad:${animal.edad}</p>
                <p>Genero:${animal.genero}</p>
            </div>
        </div>
        
        `
    }

    document.querySelector(".contenedor_tarjeta").innerHTML=cad;

}
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
        let email = document.getElementById("email");
        let telefono = document.getElementById("telefono");
        let password = document.getElementById("passwordReg");
        let repPassword = document.getElementById("repPassword");
        avatar.addEventListener("change", e => {console.log(e)});
        let error = false;

        console.log(avatar);

        //expreciones regulares
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        let telefonoRegex = /^\d{10}$/;

        //email
        if(!emailRegex.test(email.value)){
            document.getElementById("validar_email").innerHTML = "Formato de mail incorrecto";
            validar_mail.innerHTML = "Por favor, introduce un correo electrónico válido.";
            error = true; // Evitar que el formulario se envíe si la validación falla
            email.focus();
        }else{
            document.getElementById("validar_email").innerHTML="";
        }

        //telefono
        if(!telefonoRegex.test(telefono.value)) {
            document.getElementById("validar_telefono").innerHTML = "Código de área + celular [sin 15, sin espacios y sin caracteres especiales]";
            error = true;
            password.focus();
        }else{
            document.getElementById("validar_telefono").innerHTML ="";
        }


        //contraseña
        if(password.value.length < 8 || !passwordRegex.test(password.value)) {
            document.getElementById("validar_password").innerHTML = "La clave debe contener al menos ocho caracteres, una mayúscula, una minúscula, un número y un carácter especial";
            error = true;
            password.focus();
        }else{
            document.getElementById("validar_password").innerHTML ="";
        }

        //repetir contraseña
        if(repPassword.value != password.value){
            document.getElementById("validar_rep_password").innerHTML = "Las claves no coinciden";
            error = true;
            repPassword.focus();
        }else{
            document.getElementById("validar_rep_password").innerHTML = "";
        }


        if (error == false) {
            document.getElementById("usuario").value = ""
            document.getElementById("validar_usuario").innerHTML = "&nbsp;";
            document.getElementById("clave").value = ""
            document.getElementById("validar_clave").innerHTML = "&nbsp;";
            alert("Dato enviado");
        }
        return !error;

    }
}

//---------------------------------------------------------
//login
if(document.querySelector(".login")){
    function inicio(){
        location.href = "./index.html";
    }
}


//---------------------------------------------------------
//recuperacion
if(document.querySelector(".recuperacion")){
    function inicio(){
        location.href = "./index.html";
    }
}



