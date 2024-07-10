from sqlalchemy import Column, Integer, String, DateTime
from app import app, db   #,ma
from modelos.personas_modelo import *
from modelos.pet_modelo import *

# defino las tablas
class Adopcion(db.Model):   # la clase Usuario hereda de db.Model    
    id=db.Column(db.Integer, primary_key=True)   #define los campos de la tabla
    id_persona = db.Column(db.Integer, db.ForeignKey('personas.id_persona'), nullable=False)
    id_pet = db.Column(db.Integer, db.ForeignKey('pet.id_pet'), nullable=False)
    fechadop=db.Column(db.DateTime, default=db.func.current_timestamp())
    observacion=db.Column(db.String(100))
    #relacion con persona usuario(adoptante)
   
    def __init__(self,id_persona,id_pet,fechadop,observacion):   #crea el  constructor de la clase
        self.id_persona=id_persona # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.id_pet=id_pet   
        self.fechadop=fechadop
        self.observacion=observacion
        
        

with app.app_context():
    db.create_all()  # aqui crea todas las tablas
#  ************************************************************
