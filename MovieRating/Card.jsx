import React from 'react';
import './cardStyle.css';

export default function Card({ movie }) {
    return (
        <div className='card'>
            <h4 className='movie-name'>{movie.title}</h4>
            <ul>
                <li><span className='key'>Director</span>: {movie.director}</li>
                <li><span className='key'>Release Year</span>: {movie.releaseYear}</li>
                <li><span className='key'>Genre</span>: {movie.genre}</li>
                <li><span className='key'>Rating</span>: {movie.rating}</li>
            </ul>
        </div>
    );
}
