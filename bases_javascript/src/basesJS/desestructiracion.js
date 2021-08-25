//tema: desuctructarion (como manejar los elementos internos de un objeto)

//const persona = {
  //  nombre: "Horacio",
   // apellidos: "maldonado hernandez",
   // email: "horaciomh@gmail.com"
//}
//con esto estoy destructurando, asignando a constantes los valores y mandandolas a llamar linea 9y10
//const {nombre} = persona;
//console.log(nombre);


// aqui se mandan a visulizar valores antes y despues de  hacer la asignacion (14-22)
//const persona2 = persona;

//console.log ("p1", persona.nombre);
//console.log ("p2", persona2.nombre);

//persona2.nombre = "Lacho";

//console.log ("p1", persona.nombre);
//console.log ("p2", persona2.nombre);

//spread son los ...

// const persona2 = {...persona};
// console.log ("p1", persona.nombre);
// console.log ("p2", persona2.nombre);

// const persona2 = "juan";
// console.log ("p1", persona.nombre);
// console.log ("p2", persona2.nombre);


//para mostrar ciertas posiciones del arreglo
const personajes = ["goku", "vegeta", "trunks", "bulma"];

//const [, , personaje3] = personajes;

const caracteres = [...personajes];
caracteres[3] = "Gohan";

console.log({personajes});
console.log({caracteres});

