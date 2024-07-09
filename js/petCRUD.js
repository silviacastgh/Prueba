const { createApp } = Vue
  createApp({
    data() {
      return {
        pets:[],
        
        url:'https://scastillo.pythonanywhere.com/pet',   // si ya lo subieron a pythonanywhere
        error:false,
        cargando:true,
        /*atributos para el guardar los valores del formulario */
        id_pet:0,
        foto:"",
        nombre:"", 
        edad:0,
        genero:"",
        especie:"",
        castrado:""
    }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.pets = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        eliminar(id_pet) {
            const url = this.url+'/' + id_pet;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
			 alert('Registro Eliminado')
                    location.reload(); // recarga el json luego de eliminado el registro
                })
        },
        grabar(){
            let pet = {
                foto:this.foto,
                nombre:this.nombre,
                edad: this.edad,
                genero: this.genero,
                especie:this.especie,
                castrado:this.castrado
            }
            var options = {
                body:JSON.stringify(pet),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./petCRUD.html";  // recarga productos.html
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")  // puedo mostrar el error tambien
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')
