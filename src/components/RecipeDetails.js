import React from 'react';
import RecipeStyles from './Recipe.module.css';

const RecipeDetails = (props) => {
    return(
        <div >
            <ul >
    <li>{props.text}</li>
    <li>{props.weight}</li>
            </ul>
        </div>
    )
}

export default RecipeDetails;
