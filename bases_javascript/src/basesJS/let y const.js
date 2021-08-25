var variableVar = "VAR FUERA DEL IF";
let variableLet = "LET FUERA DEL IF";
const constante = "lacho";

if (true) {
const constante = "Maldonado";
var variableVar = "VAR DENTRO DEL IF";
let variableLet = "LET DENTRO DEL IF";
console.log(variableLet);
console.log(constante);
}

console.log(variableVar);
console.log(variableLet);
console.log(constante);

// let solo muestra lo que esta dentro de su estructura, var muestra sin importar donde esta
