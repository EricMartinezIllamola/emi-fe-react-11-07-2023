import React from 'react';
import Button from './Button';
import "../styles/article.css";

function Article(props) {
    return (
        <div className='article'>
            <h3>{props.title}</h3>
            <p>{props.contenido}</p>
            <React.StrictMode>
                <Button />
            </React.StrictMode>
        </div>
    );
}

export default Article;