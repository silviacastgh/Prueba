

function validar_ingreso(){
    let usuario = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let error = false;

    //usuario
    if(usuario.trim() == 0 ){
        document.getElementById('validar_login_usuario').innerHTML = 'Ingrese el usuario';
        error = true;
    }else{
        document.getElementById('validar_login_usuario').innerHTML = '';
    }

    //contraseña
    if(password.trim() == 0 ){
        document.getElementById('validar_login_password').innerHTML = 'Ingrese la contraseña';
        error = true;
    }else{
        document.getElementById('validar_login_password').innerHTML = '';
    }

    
    if (error == false) {
        sessionStorage.setItem('usuario', usuario);
        sessionStorage.setItem('password', password);
        //alert('Bienvenido!');
        //window.location.href = './index.html';
        return error;
        
    }
    return !error;
    //false;
}


const { createApp } = Vue
createApp({
    data() {
        return {
            personas: [],
            // esto es para el boton modificar +(location.search.substr(4)===''?'':'/')+location.search.substr(4)
            url: 'https://scastillo.pythonanywhere.com/personas' ,
            error: false,
            id: 0,
            foto: '',
            nombre: '',
            apellido: '',
            mail: '',
            fechanac: '',
            movil: '',
            genero: '',
            usuario: '',
            clave: '',
            rol: ''
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.personas = data;
                    this.cargando = false;

                    this.id_persona = data.id_persona;
                    this.foto = data.foto;
                    this.nombre = data.foto;
                    this.apellido = data.foto;
                    this.mail = data.foto;
                    this.fechanac = data.foto;
                    this.movil = data.foto;
                    this.genero = data.foto;
                    this.usuario = data.foto;
                    this.clave = data.foto;
                    this.rol = data.foto;

                    console.log(this.personas)
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        login(){
            const usuario=this.usuario;
            const clave=this.clave;
            sessionStorage.setItem('adm',0);
            let i=0;

            while ( i < this.personas.length && this.personas[i].usuario != usuario){
                i++;
            }
            if (i<(this.personas.length)){
                if (this.personas[i].clave==clave){
                    if (this.personas[i].rol=='admin'){
                        sessionStorage.setItem('rol','admin');  
                    }
                    else{
                        sessionStorage.setItem('rol','user'); 
                    }
                    alert('Bienvenido!');
                    window.location.href = './index.html';
                }else{
                    alert('Clave erronea');
                }
            }else{
                alert('Usuario erroneo');
            }
        },
        onFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.foto = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        grabar() {
            let persona = {
                foto: './img/no-avatar.png',
                nombre: this.nombre,
                apellido: this.apellido,
                mail: this.mail,
                fechanac: this.fechanac,
                movil: this.movil,
                genero: this.genero,
                usuario: this.usuario,
                clave: this.clave,
                rol: 'user'
            }
        
            var options = {
                body: JSON.stringify(persona),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            
            console.log('Persona:', persona);
            console.log('Options:', options);
        
            fetch(this.url, options)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Success:', data);
                    alert('Usuario creado!');
                    window.location.href = './index.html';
                })
                .catch(err => {
                    console.error('Error:', err);
                    alert('Error al Grabarr');
                });
        }, 

    },
    created() {

        // si viene de la modificacion le agrego '/<id>' del producto
        this.fetchData(this.url);

    },
}).mount('#app')


