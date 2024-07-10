from flask import  jsonify,request  #,Flask# del modulo flask importar la clase Flask y los métodos jsonify,request
#from sqlalchemy import Column, Integer, String, DateTime
from app import app, db,ma
from modelos.personas_modelo import *
from modelos.pet_modelo import *
from modelos.adopcion_modelo import *

class AdopcionSchema(ma.Schema):
    class Meta:
        fields=('id','id_persona','id_pet','fechadop','observacion')
adopcion_schema=AdopcionSchema()            # El objeto usuario_schema es para traer un usuario
adopciones_schema=AdopcionSchema(many=True)  # El objeto usuarios_schema es para traer multiples registros de usuario

# crea los endpoint o rutas (json)
@app.route('/adopcion',methods=['GET'])
def get_adopciones():
    all_adopcion=Adopcion.query.all()         # el metodo query.all() lo hereda de db.Model
    result=adopciones_schema.dump(all_adopcion)  # el metodo dump() lo hereda de ma.schema y
                                               # trae todos los registros de la tabla
    return jsonify(result)                       # retorna un JSON de todos los registros de la tabla

@app.route('/adopcion/<id>',methods=['GET'])
def get_adopcion(id):
    adopcion=Adopcion.query.get(id)
    return adopcion_schema.jsonify(adopcion)   # retorna el JSON de un producto recibido como parametro

@app.route('/adopcion/<id>',methods=['DELETE'])
def delete_adopcion(id):
    adopcion=Adopcion.query.get(id)
    db.session.delete(adopcion)
    db.session.commit()
    return adopcion_schema.jsonify(adopcion)   # me devuelve un json con el registro eliminado

@app.route('/adopcion', methods=['POST']) # crea ruta o endpoint
def create_adopcion():
    id_persona=request.json['id_persona']
    id_pet=request.json['id_pet']
    fechadop=request.json['fechadop']
    observacion=request.json['observacion']
    new_adopcion=Adopcion(id_persona,id_pet,fechadop,observacion)
    db.session.add(new_adopcion)
    db.session.commit()
    return adopcion_schema.jsonify(new_adopcion)


@app.route('/adopcion/<id>' ,methods=['PUT'])
def update_adopcion(id):
    adopcion=Adopcion.query.get(id)
    adopcion.id_persona= request.json['id_persona']
    adopcion.id_pet=request.json['id_pet']
    adopcion.fechadop=request.json['fechadop']
    adopcion.observacion=request.json['observacion']
    db.session.commit()
    return adopcion_schema.jsonify(adopcion)

     # confirma el cambio
     # y retorna un json con el producto
 


