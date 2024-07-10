const { createApp } = Vue
  createApp({
    data() {
      return {
        adopciones:[],
        url:'https://scastillo.pythonanywhere.com/adopcion',   // si ya lo subieron a pythonanywhere
        error:false,
        cargando:true,
        /*atributos para el guardar los valores del formulario */
        id:0,
        id_persona:0,
        id_pet:0,
        fechadop:0, 
        observacion:""
    }  
    },

    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.adopciones = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        eliminar(id) {
            const url = this.url+'/' + id;
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
            let adopcion = {
                id:this.id,
                id_persona: this.id_persona,
                id_pet: this.id_pet,
                fechadop:this.fechadop,
                observacion:this.observacion
            }
            var options = {
                body:JSON.stringify(adopcion),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./adopcionCRUD.html";  // recarga productos.html
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


/*url= `http://127.0.0.1:5000/adopcion`
 //url python anywhere
fetch(url)  //sino le paso otro metodo toma como que es un GET
            .then(response => response.json())
            .then(
                data => {
               console.log(data) //es un arreglo con todos los datos
               cad=``
               for (elemeto of data){
                cad= cad+
                `
              <tr class="">
                    <td scope="row">${elemento.id}</td>
                    <td>{${elemento.id_persona}}</td>
                    <td>{${elemento.id_pet}}</td>
                    <td>{${elemento.fechadop}}</td>
                    <td>{${elemento.observacion}}</td>.
                    <td>
                    
                    
                    </td>
                    
            </tr> `;
               }

               document.querySelector("tbody").innerHTML=cad
            })
            .catch(error => {
                console.log("Error:"+error)
                             
            });

            */
   