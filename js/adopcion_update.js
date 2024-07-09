console.log(location.search)     // lee los argumentos pasados a este formulario
var id=location.search.substr(4)  // producto_update.html?id=1
console.log(id)
const { createApp } = Vue
  createApp({
    data() {
      return {
        id:0,
        id_persona:0,
        id_pet:0,
        fechadop:0,
        observacion:"",
        url:'https://scastillo.pythonanywhere.com/adopcion/' + id ,
       }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id=data.id,
                    this.id_persona=data.id_persona,
                    this.id_pet=data.id_pet,
                    this.fechadop=data.fechadop,
                    this.observacion = data.observacion;
                                     
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        modificar() {
            let adoptante = {
                fechadop:this.fechadop,
                observacion:this.observacion,
                
            }
            var options = {
                body: JSON.stringify(adoptante),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./adopcionCRUD.html"; // navega a productos.html          
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
