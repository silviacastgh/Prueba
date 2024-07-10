
console.log(location.search)     // lee los argumentos pasados a este formulario
var id=location.search.substr(4)  // producto_update.html?id=1
console.log(id)

const { createApp } = Vue
  createApp({
    data() {
      return {
        id_persona:0,
        foto:"",
        nombre:"",
        apellido:"",
        mail:"",
        fechanac:"",
        movil:"",
        genero:"",
        usuario:"",
        rol:"",
        clave:"",
        url:'https://scastillo.pythonanywhere.com/personas/' + id
       }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id_persona=data.id_persona;
                    this.foto=data.foto;
                    this.nombre = data.nombre;
                    this.apellido = data.apellido;
                    this.mail=data.mail;
                    this.fechanac=data.fechanac;   
                    this.movil=data.movil;
                    this.genero=data.genero;
                    this.usuario=data.usuario;
                    this.clave=data.clave;
                    this.rol=data.rol                
                })
                .catch(err => {
                    console.error(err)
                    this.error=true              
                })
        },
        modificar() {
            let persona = {       
                foto:this.foto,
                nombre:this.nombre,
                apellido:this.apellido,
                mail:this.mail,
                fechanac:this.fechanac,
                genero:this.genero,
                usuario:this.usuario,
                clave:this.clave,
                rol:this.rol
             
            }

            var options = {
                body: JSON.stringify(persona),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado"),
                    console.log (persona),
                    window.location.href = "./personasCRUD.html" // navega a productos.html          
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })      
        }
    },
    created() {
        
        this.fetchData(this.url)
    },
  }).mount('#app')
