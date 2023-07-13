import React from 'react';
import "../styles/calculadora.css";

function Calculadora() {
    const [resultado, setResultado] = React.useState("");
    const handleChange = (valor) => {
        setResultado(resultado + valor);
    }
    const handleReset = (valor) => {
        setResultado(valor);
    }
    const calcular = () => {
        try {setResultado(eval(resultado).toString())}
        catch (error) { setResultado("Error") };
    }
    return (
        <div className='calculadora_box'>
            <p>{resultado}</p>
            <button onClick={() => { handleChange("7") }} >7</button>
            <button onClick={() => { handleChange("8") }} >8</button>
            <button onClick={() => { handleChange("9") }} >9</button>
            <button onClick={() => { handleChange("/") }} >/</button>
            <button onClick={() => { handleChange("4") }} >4</button>
            <button onClick={() => { handleChange("5") }} >5</button>
            <button onClick={() => { handleChange("6") }} >6</button>
            <button onClick={() => { handleChange("*") }} >*</button>
            <button onClick={() => { handleChange("1") }} >1</button>
            <button onClick={() => { handleChange("2") }} >2</button>
            <button onClick={() => { handleChange("3") }} >3</button>
            <button onClick={() => { handleChange("-") }} >-</button>
            <button onClick={() => { handleChange("0") }} >0</button>
            <button onClick={() => { handleChange(".") }} >.</button>
            <button onClick={() => { calcular() }}  >=</button>
            <button onClick={() => { handleChange("+") }} >+</button>
            <button onClick={() => { handleReset("") }} >C</button>
        </div>
    );
}

export default Calculadora;