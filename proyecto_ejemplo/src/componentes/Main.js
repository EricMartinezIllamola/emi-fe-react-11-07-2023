import React from 'react';
import Article from './Article';
import "../styles/main.css";

function Main() {
    return (
        <main>
            <h1>Contenido Principal</h1>
            <p>Este es el contenido principal de la aplicación.</p>
            <React.StrictMode>
                <Article />
                <Article />
                <Article />
            </React.StrictMode>
        </main>
    );
}

export default Main;