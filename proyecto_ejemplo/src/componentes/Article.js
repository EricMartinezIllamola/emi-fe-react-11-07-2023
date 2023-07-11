import React from 'react';
import Button from './Button';
import "../styles/article.css";

function Article() {
    return (
        <div className='article'>
            <h3>Article</h3>
            <p>Este es el contenido del article.</p>
            <React.StrictMode>
                <Button />
            </React.StrictMode>
        </div>
    );
}

export default Article;