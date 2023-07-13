import React from 'react';
import "../styles/perfil_usuario.css";

function PerfilUsuario(props) {
    const [edad, setEdad] = React.useState(props.edad);
    const actualizar_edad = () => {
        setEdad(29);
        };
    return (
        <div className='perfil_box'>
            <img src={props.imagen}/>
            <div className='contenido_box'>
                <p>Nombre: {props.nombre}</p>
                <p>Edad: {edad}</p>
            </div>
            <button onClick = {actualizar_edad}>Actualizar Edad</button>
        </div>
    );
}

export default PerfilUsuario;