var Bicicleta = function(id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function (){
    return 'id: ' + this.id + "| color: " + this.color;
}

Bicicleta.allBicis = [];
Bicicleta.add = function(aBici){
    Bicicleta.allBicis.push(aBici);
}

Bicicleta.findById = function(aBiciId){
    var aBici = Bicicleta.allBicis.find(x => x.id == aBiciId);
    if (aBici)
        return aBici;
    else
        throw new Error(`No existe una bicicleta con el id ${aBiciId}`);
}

Bicicleta.removeById = function (aBiciId) {
    // var aBici = Bicicleta.findById(aBiciId);
    for(var i = 0; i < Bicicleta.allBicis.length; i++){
        if(Bicicleta.allBicis[i].id == aBiciId){
            Bicicleta.allBicis.splice(i, 1);
            break;
        }
    }

}

// var a = new Bicicleta(1, 'roja', 'bmx', [4.579754, -74.239717]);
// var b = new Bicicleta(2, 'Azul', 'Cannondale', [4.579754, -74.259717]);

// Bicicleta.add(a);
// Bicicleta.add(b);

module.exports = Bicicleta;