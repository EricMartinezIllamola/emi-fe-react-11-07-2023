import React from 'react';
import "../styles/formulario.css";

function Formulario() {
    const paises = ["México", "Estados Unidos", "Canadá"];
    const select_paises = paises.map((pais, index) =>
        <option value={pais}>{pais}</option>
    );

    const generos = ["Masculino", "Femenino", "Otro"];
    const radiobutton_generos = generos.map((genero, index) =>
        <div>
            <input type="radio" id="genero" name="genero" value={genero} />
            <label for={genero}>{genero}</label>
        </div>
    );

    const [nombre, setNombre] = React.useState("");
    const [edad, setEdad] = React.useState("");
    const [descripcion, setDescripcion] = React.useState("");
    function handleNombre(event) {
        setNombre(event.target.value)
    };
    function handleEdad(event) {
        setEdad(event.target.value)
    };
    function handleDescripcion(event) {
        setDescripcion(event.target.value)
    };
    return (
        <form>
            <h3>Formulario</h3>
            <label>Nombre:</label> <br />
            <input type="text" value={nombre} onChange={handleNombre}/> <br />
            <label>Edad:</label> <br />
            <input type="number" value={edad} onChange={handleEdad}/><br />
            <label>Descripción:</label> <br />
            <textarea value={descripcion} onChange={handleDescripcion}></textarea> <br />
            <label>Genero:</label> <br />
            {radiobutton_generos}
            <label>País:</label> <br />
            <select>{select_paises}</select><br />
            <input type="submit" value="Enviar"/>
        </form>
    )
}

export default Formulario;