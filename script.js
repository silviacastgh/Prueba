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
            <a href="./index.html" class="dropbtn">ADOPCIÓN</a>
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
            <label for="">¡Recibí las novedades en tu e-mail!</label>
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
[
    {
      "id": "9vt",
      "url": "https://cdn2.thecatapi.com/images/9vt.jpg",
      "width": 500,
      "height": 333
    },
    {
      "id": "au5",
      "url": "https://cdn2.thecatapi.com/images/au5.jpg",
      "width": 3707,
      "height": 3104
    },
    {
      "id": "b7d",
      "url": "https://cdn2.thecatapi.com/images/b7d.jpg",
      "width": 500,
      "height": 334
    },
    {
      "id": "bh3",
      "url": "https://cdn2.thecatapi.com/images/bh3.jpg",
      "width": 491,
      "height": 332
    },
    {
      "id": "cdi",
      "url": "https://cdn2.thecatapi.com/images/cdi.jpg",
      "width": 500,
      "height": 332
    },
    {
      "id": "dte",
      "url": "https://cdn2.thecatapi.com/images/dte.jpg",
      "width": 3264,
      "height": 1952
    },
    {
      "id": "MTc5OTc4Ng",
      "url": "https://cdn2.thecatapi.com/images/MTc5OTc4Ng.jpg",
      "width": 770,
      "height": 1090
    },
    {
      "id": "MjA0MTUxNw",
      "url": "https://cdn2.thecatapi.com/images/MjA0MTUxNw.jpg",
      "width": 640,
      "height": 425
    },
    {
      "id": "re7uO34hz",
      "url": "https://cdn2.thecatapi.com/images/re7uO34hz.jpg",
      "width": 1600,
      "height": 2397
    },
    {
      "id": "yqcbOxkWK",
      "url": "https://cdn2.thecatapi.com/images/yqcbOxkWK.jpg",
      "width": 970,
      "height": 500
    }
  ]
  let fotos = [
              "https://cdn2.thecatapi.com/images/9vt.jpg",
              "https://cdn2.thecatapi.com/images/au5.jpg",
              "https://cdn2.thecatapi.com/images/au5.jpg",
              "https://cdn2.thecatapi.com/images/bh3.jpg",
              "https://cdn2.thecatapi.com/images/cdi.jpg",
              "https://cdn2.thecatapi.com/images/dte.jpg",
              "https://cdn2.thecatapi.com/images/MTc5OTc4Ng.jpg",
              "https://cdn2.thecatapi.com/images/MjA0MTUxNw.jpg",
              "https://cdn2.thecatapi.com/images/re7uO34hz.jpg",
              "https://cdn2.thecatapi.com/images/yqcbOxkWK.jpg",

  ]
  let cad1 = ""
  for (let elemento of fotos)
    document.write('<img src=${elemento}>') 