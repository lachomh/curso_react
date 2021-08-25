//el export antes de const es para que se pueda mandar a llamar donde la quieran importar

const heroes =[
{
    is: 1,
    name: "batman",
    owner:"dc",
},
{
    is: 2,
    name: "wolverin",
    owner:"marvel",
},
{
    is: 3,
    name: "flash",
    owner:"dc",
},
{
    is: 4,
    name: "spiderman",
    owner:"marvel",
},
{
    is: 5,
    name: "superman",
    owner:"dc",
},
]
export default (heroes);

// tambien se puede exportar poniendo al final->  export{heroes};   y ya no ponerlo en la linea 1
//console.log(heroes);