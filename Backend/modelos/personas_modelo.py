from app import app, db #, ma
from sqlalchemy.orm import declarative_base, relationship


# defino las tablas
class personas(db.Model):   # la clase persona hereda de db.Model    
    id_persona=db.Column(db.Integer, primary_key=True)   #define los campos de la tabla
    #historial_adopciones = db.relationship('Adopcion', backref='personas', lazy=True)
    foto=db.Column(db.String(400))
    nombre=db.Column(db.String(45))
    apellido=db.Column(db.String(45))
    mail=db.Column(db.String(45))
    fechanac=db.Column(db.String(10))
    movil=db.Column(db.String(45))
    genero=db.Column(db.String(45))
    usuario=db.Column(db.String(45))
    clave=db.Column(db.String(45))
    rol=db.Column(db.String(5))
   # usuario = db.relationship('usuarios', backref='personas', lazy=True)
   
   
    def __init__(self,foto,nombre,apellido,mail,fechanac,movil,genero,usuario,clave,rol):   #crea el  constructor de la clase
       # self.id_usuario= id_usuario
        self.foto=foto   # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.nombre=nombre
        self.apellido=apellido
        self.mail=mail
        self.fechanac=fechanac
        self.movil=movil
        self.genero=genero
        self.usuario=usuario
        self.clave=clave
        self.rol=rol


with app.app_context():
    db.create_all()  # aqui crea todas las tablas
#  ************************************************************
