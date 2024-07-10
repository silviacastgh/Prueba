from app import app, db   #,ma
from sqlalchemy.orm import declarative_base, relationship


# defino las tablas
class Usuarios(db.Model):   # la clase Usuario hereda de db.Model    
    id=db.Column(db.Integer, primary_key=True)   #define los campos de la tabla
    usuario=db.Column(db.String(100))
    clave=db.Column(db.String(10))
    rol=db.Column(db.Integer)
   
    #usuario = db.relationship('usuarios', backref='personas', lazy=True)
    
    def __init__(self,usuario,clave,rol):   #crea el  constructor de la clase
        self.usuario=usuario   # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.clave=clave
        self.rol=rol
        

with app.app_context():
    db.create_all()  # aqui crea todas las tablas
#  ************************************************************

