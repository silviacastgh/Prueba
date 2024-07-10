from flask import  jsonify,request  #,Flask# del modulo flask importar la clase Flask y los métodos jsonify,request
from app import app, db, ma
from modelos.pet_modelo import *

class PetSchema(ma.Schema):
    class Meta:
        fields=('id_pet','nombre','edad','genero','especie','castrado','foto')


pet_schema=PetSchema()  # El objeto producto_schema es para traer un producto
pets_schema=PetSchema(many=True)  # El objeto productos_schema es para traer multiples registros de producto




# crea los endpoint o rutas (json)
@app.route('/pet',methods=['GET'])
def get_Pet():
    all_pet=Pet.query.all() # el metodo query.all() lo hereda de db.Model
    result=pets_schema.dump(all_pet)  #el metodo dump() lo hereda de ma.schema y
                                                 # trae todos los registros de la tabla
    return jsonify(result)     # retorna un JSON de todos los registros de la tabla




@app.route('/pet/<id>',methods=['GET'])
def get_pet(id):
    pet=Pet.query.get(id)
    return pet_schema.jsonify(pet)   # retorna el JSON de un producto recibido como parametro


@app.route('/pet/<id>',methods=['DELETE'])
def delete_pet(id):
    pet=Pet.query.get(id)
    db.session.delete(pet)
    db.session.commit()                     # confirma el delete
    return pet_schema.jsonify(pet) # me devuelve un json con el registro eliminado


@app.route('/pet', methods=['POST']) # crea ruta o endpoint
def create_pet():
    #print(request.json)  # request.json contiene el json que envio el cliente
    foto=request.json['foto']
    nombre=request.json['nombre']
    edad=request.json['edad']
    genero=request.json['genero']
    especie=request.json['especie']
    castrado=request.json['castrado']
    
    new_pet=Pet(foto,nombre,edad,genero,especie,castrado)
    db.session.add(new_pet)
    db.session.commit() # confirma el alta
    return pet_schema.jsonify(new_pet)


@app.route('/pet/<id>' ,methods=['PUT'])
def update_pet(id):
    pet=Pet.query.get(id)

    pet.foto=request.json['foto']
    pet.nombre=request.json['nombre']
    pet.edad=request.json['edad']
    pet.genero=request.json['genero']
    pet.especie=request.json['especie']
    pet.castrado=request.json['castrado']
    

    db.session.commit()    # confirma el cambio
    return pet_schema.jsonify(pet)    # y retorna un json con el producto
 


# programa principal *******************************
if __name__=='__main__':  
    app.run(debug=True, port=5000)   # ejecuta el servidor Flask en el puerto 5000


