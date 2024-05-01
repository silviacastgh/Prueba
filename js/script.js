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
                <a href="#">CONOCELOS</a>
                <a href="#">REQUISITOS DE ADOPCIÓN</a>
            </div>
            </li>
            <li class="dropdown">
                <a href="./donacion.html" class="dropbtn">DONAR</a>
                <div class="dropdown-content">
                <a href="#">DONACIONES ECONÓMICAS</a>
                <a href="#">DONACIONES DE INSUMOS</a>
                </div>
            </li>
            <li><a href="./tienda.html">PET SHOP</a></li>
            <li><a href="./contacto.html">CONTACTO</a></li>
            <li><a href="./login.html">INGRESAR</a></li>
        </ul>     
    </nav>
`
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
            <label for="">¡Recibí las novedades en tu e-mal!</label>
            <input type="email" name="" id="" placeholder="Ingresá tu e-mail">
        </div>  
        <button type="submit" class="boton">¡SUSCRIBIRME!</button>
        </form>
    </div>
    </div>
    <div class="copyright">
    <p>PROYECTO ANIMALES © 2024</p>
    </div>
    </div>
`