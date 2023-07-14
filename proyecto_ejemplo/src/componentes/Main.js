import React from 'react';
import Article from './Article';
import PerfilUsuario from './PerfilUsuario';
import Calculadora from './Calculadora';
import Lista_tareas from './Lista_tareas';
import Formulario from './Formulario';
import "../styles/main.css";

function Main() {
    const title = ["Article 1", "Article 2", "Article 3"];
    const contenido = ["Este es el contenido del article 1.", "Este es el contenido del article 2.", "Este es el contenido del article 3."];
    const nombre = "Jhon";
    const edad = 20;
    const imagen = "http://via.placeholder.com/100";
    return (
        <main>
            <h1>Contenido Principal</h1>
            <p>Este es el contenido principal de la aplicación.</p>
            <React.StrictMode>
                <Article title={title[0]} contenido={contenido[0]} />
                <PerfilUsuario nombre={nombre} imagen={imagen}  edad={edad}/>
                <Calculadora />
                <Lista_tareas />
                <Formulario />
            </React.StrictMode>
        </main>
    );
}

export default Main;

// for (let i = 0; i < title.length; i++) {}