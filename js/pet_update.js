console.log(location.search)     // lee los argumentos pasados a este formulario
var id=location.search.substr(4)  // producto_update.html?id=1
console.log(id)
const { createApp } = Vue
  createApp({
    data() {
      return {
        id_pet:0,
        foto:"",
        nombre:"",
        edad:0,
        genero:"",
        especie:"",
        castrado:"",
        url:'https://scastillo.pythonanywhere.com/pet/'+ id
       }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id_pet=data.id_pet;
                    this.foto=data.foto;
                    this.nombre = data.nombre;
                    this.edad=data.edad;
                    this.genero=data.genero;
                    this.especie=data.especie;
                    this.castrado=data.castrado                    
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        modificar() {
            let pet = {
                foto:this.foto,
                nombre:this.nombre,
                edad: this.edad,
                genero: this.genero,
                especie: this.especie,
                castrado: this.castrado
            }
            
            var options = {
                body: JSON.stringify(pet),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./petCRUD.html"; // navega a productos.html          
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
