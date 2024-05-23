const { createApp } = Vue
createApp({
  data() {
    return {
      url: "./js/pg.json", 
      datos: [],
      datosAll: [],

      tipos: [],
      generos: [],

      edad: 10,  
      tipo:"All",
      genero:"All",

      
    }
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(
          data => {
            console.log(data)
            this.datos = data
            this.datosAll=data
           this.cargarListasDesplegables()
          }
        )
        .catch(error => {
          console.log("Error:" + error)
          this.error = true
        });
      }, 
    filtro() {
      
        this.datos = this.datosAll.filter( elemento=>(
        elemento.edad <= this.edad && 
        elemento.edad!="")     &&  
        (elemento.tipo == this.tipo || this.tipo==="All") && 
        (elemento.genero == this.genero || this.genero==="All" ))
        
        },
        orden() {
          this.datos.sort((a, b) => { return (a.title > b.title ? 1 : -1) } )// si retorna 1 lo invierte, si retorna -1 lo deja como esta 
        },
        cargarListasDesplegables() {
          this.tipos =[]
          this.generos = []
          for (elemento of this.datosAll) {
            if (elemento.tipo !== '' && this.tipos.indexOf(elemento.tipo) < 0) {
              this.tipos.push(elemento.tipo)
            }
            if (elemento.genero !== '' && this.generos.indexOf(elemento.genero) < 0) {
              this.generos.push(elemento.genero)
            }
           }
           

    }
    
  }, 
  

created() {  // created() se ejecuta cada vez que se crea el objeto VUE
  this.fetchData(this.url)
}
}).mount('#app')
