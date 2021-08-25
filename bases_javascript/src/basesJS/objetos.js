const atributo = "nombre";
const persona = {
nombre:"Mateo",
apellido: "Martinez",
edad: 2,
saludo: function(){
    console.log("probando una función");
},
};
console.log(persona.nombre);
 // las llaves permiten que se vea el nombre del objeto, si las quitamos aparecen los datos pero no el nombre del objeto
 // Si despues del nombre dle objeto se le agrega un punto y el nombre del campo, solo aparece el atributo seleccionado


 console.log(persona[atributo]);
 // esta segunda manera muestra el atributo que esta en corchetes.. mismo que se dio de alta en linea 1

 persona.saludo();
//Con esta opción se manda a llamar el msj escrito en la fila 7. del objeto creado(persona)
