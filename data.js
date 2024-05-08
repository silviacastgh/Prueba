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

  let data = [
              
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
  cad = ``
  for (let i = 1; i < data.length; i++) {
   cad = cad + `
        <div class="tarjeta">
            <img src="${data[i].imagen}" alt="${data[i].nombre}">
           <div class="cuerpo">
                <p>Nombre: ${data[i].nombre}</p>
                <p>Estado: ${data[i].estado}</p>
                <p>Edad:${data[i].edad}</p>
                <p>Genero:${data[i].genero}</p>
           </div>
       </div>
      
       `
      }
      document.getElementById("data").innerHTML=cad
