const { createApp } = Vue
createApp({
  data() {
    return {
      personas:[], 
      url:' https://scastillo.pythonanywhere.com/personas', 
      error: false,
      cargando: true,
      /*atributos para el guardar los valores del formulario */
      
      id_persona: 0,
      foto:"",
      nombre: "",
      apellido: "",
      mail:"",
      fechanac:0,
      movi:"0",
      genero:"",
      usuario:"",
      clave:"",
      rol:"",
    }
  },

  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json())
        .then(data => {
          this.personas = data;
          console.log(data);
          this.cargando = false
        })
        .catch(err=> {
          console.error(err);
          this.error = true
        })
    },
    eliminar(id_persona) {
      const url = this.url+'/' + id_persona;
      var options = {
        method: "DELETE",
      }
      fetch(url, options)
        .then((res) => res.text()) // or res.json()
        .then((res) => {
          alert("Registro Eliminado")
          location.reload(); // recarga el json luego de eliminado el registro
        })
    },
    grabar() {
        let persona = {
            foto:this.foto,
            nombre:this.nombre,
            apellido:this.apellido,
            mail:this.mail,
            fechanac:this.fechanac,
            movil:this.movil,
            genero:this.genero,
            usuario:this.usuario,
            clave:this.clave,
            rol:this.rol
        }
      var options = {
        body: JSON.stringify(persona),
        method: "POST",
        headers: { "Content-Type": "application/json" },
        redirect: "follow"
      };
      fetch(this.url, options)
        .then(function () {
          alert("Registro grabado")
          window.location.href = "./personasCRUD.html"; // recarga productos.html
        })
        .catch((err) => {
          console.error(err);
          alert("Error al Grabar"); // puedo mostrar el error tambien
        })
    },
  },
  created() {  //tiene los metodos que se van a ejecutar al ibnicio
    this.fetchData(this.url);
  },
}).mount("#app")
