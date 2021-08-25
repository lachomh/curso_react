import heroes from "./data/heroes";

//map permite recorrer el contenido de un arglo, modificar y regresarlo
// callbake es una funcion denteo de otra funcion


// const nuevo = heroes.map ((item) => {
//    return { ...item, version: 1};
// });


// filter

// const nuevo = heroes.filter((item) => {
//     return item.owner === "dc";
// });

//find encuentre un elemento dentro de un arreglo

const nuevo =heroes.find((item) => {
    return item.owner === "marvel";
});

console.log ({ heroes});
console.log ({ nuevo});