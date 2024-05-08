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

//conocelos
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
    "width": 370,
    "height": 310
  },
  {
    "id": "b7d",
    "url": "https://cdn2.thecatapi.com/images/b7d.jpg",
    "width": 300,
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
    "width": 320,
    "height": 195
  },
  {
    "id": "MTc5OTc4Ng",
    "url": "https://cdn2.thecatapi.com/images/MTc5OTc4Ng.jpg",
    "width": 770,
    "height": 109
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
    "width": 160,
    "height": 239
  },
  {
    "id": "yqcbOxkWK",
    "url": "https://cdn2.thecatapi.com/images/yqcbOxkWK.jpg",
    "width": 970,
    "height": 500
  }
]
//  let fotos = [
//            "https://cdn2.thecatapi.com/images/9vt.jpg",
//            "https://cdn2.thecatapi.com/images/au5.jpg",
//           "https://cdn2.thecatapi.com/images/b7d.jpg",
//            "https://cdn2.thecatapi.com/images/bh3.jpg",
//            "https://cdn2.thecatapi.com/images/cdi.jpg",
//            "https://cdn2.thecatapi.com/images/dte.jpg",
//            "https://cdn2.thecatapi.com/images/MTc5OTc4Ng.jpg",
//            "https://cdn2.thecatapi.com/images/MjA0MTUxNw.jpg",
//           "https://cdn2.thecatapi.com/images/re7uO34hz.jpg",
//            "https://cdn2.thecatapi.com/images/yqcbOxkWK.jpg",

//]

//let cad = ""
//for (let elemento of fotos){
 // .write('<img src=${elemento}>')
//   cad = cad +  `<img src=${elemento}> `
// } 
// document.getElementById("fotos").innerHTML=cad

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
},



]

//variable que contendrá las tarjetas
let cad = ``

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

//document.querySelector("#data").innerHTML=cad