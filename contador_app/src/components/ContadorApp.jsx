import React, {useState} from 'react';

const ContadorApp = ({valor}) => {

    const [cuenta, setCuenta] =useState(valor);
    const incrementaCuenta = (e) => {setCuenta(cuenta+1);};
    const reinicio = (e) => {setCuenta(valor);};
    
    const [cuenta2, setCuenta2] =useState(valor);
    const decrementaCuenta = (e) => {setCuenta2(cuenta2-1);};
    const reinicio2 = (e) => {setCuenta2(valor);};
    
           
    return (
        <>
            <h1> Contador App</h1>
            <hr/>
            
            <h2> Incremento</h2>
            <h2>{cuenta}</h2>
            <button onClick={(e) => incrementaCuenta (e)} > +1 </button>
            <button onClick={(e) => reinicio (e)} > Reinicio </button>


            <h2> Decremento</h2>
            <h2>{cuenta2}</h2>
            <button onClick={(e) => decrementaCuenta (e)} > -1 </button>
            <button onClick={(e) => reinicio2 (e)} > Reinicio </button>
           </>
    );
};
    
//fragment corto cuando se ocupa <> y </>
export default ContadorApp;

 