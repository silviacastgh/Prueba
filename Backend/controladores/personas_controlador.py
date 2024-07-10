from flask import  jsonify,request  #,Flask# del modulo flask importar la clase Flask y los métodos jsonify,request
from app import app, db,ma
from modelos.personas_modelo import  *

class personasSchema(ma.Schema):
    class Meta:
        fields=('id_persona','foto','nombre','apellido','mail','fechanac','movil','genero','usuario','clave','rol')
persona_schema=personasSchema()            # El objeto persona_schema es para traer una persona
personas_schema=personasSchema(many=True)  # El objeto personas_schema es para traer multiples registros de personas

# crea los endpoint o rutas (json)
@app.route('/personas', methods=['GET'])
def get_personas():
    all_personas=personas.query.all()             # el metodo query.all() lo hereda de db.Model
    result=personas_schema.dump(all_personas)  # el metodo dump() lo hereda de ma.schema y
                                              # trae todos los registros de la tabla
    return jsonify(result)                       # retorna un JSON de todos los registros de la tabla

@app.route('/personas/<id>', methods=['GET'])
def get_persona(id):
    persona=personas.query.get(id)
    return persona_schema.jsonify(persona)   # retorna el JSON de un usuario recibido como parametro

@app.route('/personas/<id>', methods=['DELETE'])
def delete_persona(id):
    persona=personas.query.get(id)
    db.session.delete(persona)
    db.session.commit()
    return persona_schema.jsonify(persona)   # me devuelve un json con el registro eliminado

@app.route('/personas', methods=['POST']) # crea ruta o endpoint
def create_persona():
    foto=request.json['foto']
    nombre=request.json['nombre']
    apellido=request.json['apellido']
    mail=request.json['mail']
    fechanac=request.json['fechanac']
    movil=request.json['movil']
    genero=request.json['genero']
    usuario=request.json['usuario']
    clave=request.json['clave']
    rol=request.json['rol']
    new_persona=personas(foto,nombre,apellido,mail,fechanac,movil,genero,usuario,clave,rol)
    db.session.add(new_persona)
    db.session.commit()
    return persona_schema.jsonify(new_persona)

@app.route('/personas/<id>' ,methods=['PUT'])
def update_persona(id):
    persona=personas.query.get(id)
    persona.foto=request.json['foto']
    persona.nombre=request.json['nombre']
    persona.apellido=request.json['apellido']
    persona.mail=request.json['mail']
    persona.fechanac=request.json['fechanac']
    persona.movil=request.json['movil']
    persona.genero=request.json['genero']
    persona.usuario=request.json['usuario']
    persona.clave=request.json['clave']
    persona.rol=request.json['rol']
    db.session.commit()
    return persona_schema.jsonify(persona)

    # confirma el cambio
     # y retorna un json con el producto
 


@app.route('/')
def bienvenida():
    return "Bienvenidos al backend"   # retorna el JSON de un usuario recibido como parametro

