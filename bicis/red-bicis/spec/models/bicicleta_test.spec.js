var Bicicleta = require('../../models/bicicleta');

beforeEach( () => { Bicicleta.allBicis = []; }); //Sin esto dará error por el test Bicicleta.aa

describe('Bicicleta.allBicis', () => {
    it('comienza vacía', () => {
        expect(Bicicleta.allBicis.length).toBe(0);        //Debe empezar vacio
    });
});

describe('Bicicleta.add', () => {
    it('agregamos una', () => {
        expect(Bicicleta.allBicis.length).toBe(0); //Debe empezar vacio

        var a = new Bicicleta(1, 'roja', 'bmx', [4.579754, -74.239717]);//Agregamos la bicicleta
        Bicicleta.add(a);

        expect(Bicicleta.allBicis.length).toBe(1);//Comprobamos que debe tener 1
        expect(Bicicleta.allBicis[0]).toBe(a);//Comprobamos que se la que se agregó
    });
});

describe('Bicicleta.findById', () => {
    it('Regresará la bici con ID 1', () => {
        expect(Bicicleta.allBicis.length).toBe(0);

        var b = new Bicicleta(1, 'Azul', 'Cannondale', [4.579754, -74.259717]);
        var c = new Bicicleta(2, 'Negro Mate', 'GW', [4.579754, -74.209717]);

        Bicicleta.add(b);
        Bicicleta.add(c);

        var targetBici = Bicicleta.findById(1);
        expect(targetBici.id).toBe(1);
        expect(targetBici.color).toBe(b.color);
        expect(targetBici.modelo).toBe(b.modelo);
    });
});

describe('Bicicleta.removeById', () => {
    it('Eliminará la bicicleta con id 1', () => {
        expect(Bicicleta.allBicis.length).toBe(0);

        var b = new Bicicleta(1, 'Azul', 'Cannondale', [4.579754, -74.259717]);
        var c = new Bicicleta(2, 'Negro Mate', 'GW', [4.579754, -74.209717]);

        Bicicleta.add(b);
        Bicicleta.add(c);

        var targetBici = Bicicleta.findById(1);
        expect(targetBici.id).toBe(1);
        var removeBici = Bicicleta.removeById(targetBici.id);
        // expect(removeBici).toBe(1);
        expect(Bicicleta.allBicis.length).toBe(1);
    });
});