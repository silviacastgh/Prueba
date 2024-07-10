from app import app, db
from sqlalchemy import Column, ForeignKey, Integer, Table
from sqlalchemy.orm import declarative_base, relationship

# defino las tablas
class Pet(db.Model):   # la clase Producto hereda de db.Model de SQLAlquemy   
    id_pet=db.Column(db.Integer, primary_key=True)   #define los campos de la tabla
    foto=db.Column(db.String(400))
    nombre=db.Column(db.String(45))
    edad=db.Column(db.Integer)
    genero=db.Column(db.String(45))
    especie=db.Column(db.String(45))
    castrado= db.Column(db.String(2))
   # adopciones = db.relationship('Adopcion', backref='pet', lazy=True)
    
    
    def __init__(self,foto,nombre,edad,genero,especie,castrado): #crea el  constructor de la clase
        self.foto=foto
        self.nombre=nombre # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.edad=edad
        self.genero=genero
        self.especie= especie
        self.castrado=castrado
        
        




    #  si hay que crear mas tablas , se hace aqui




with app.app_context():
    db.create_all()  # aqui crea todas las tablas si es que no estan creadas
#  ************************************************************
