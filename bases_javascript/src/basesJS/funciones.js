const saludando = function (nombre) {
    return `Hola ${nombre}`;
};

//saludando();
// esta era la forma de pasar los datos de la función antes, si no se pone nada, toma "nombre"(linea5)

const saludando2 = (nombre) =>{
    return`Hola ${nombre}`;
};
// entre las llaves se pone lo que quiero que haga, es la forma actual de llamar a las funciones (linea 12 y 13)
//saludando("LAcho");
//saludando2 ("Maldonado");


//algo que se puede hacer solo con funciones flechas es lo siguiente (linea 17)
const saludando3 = (nombre) => `Hola ${nombre}`


console.log (saludando("Maria"));
console.log (saludando2 ("Leon"));
console.log (saludando3("Liliana"));