import React, { useState } from 'react';
//import RecipeDetails from './RecipeDetails';
import RecipeStyles from './Recipe.module.css';
import Radium, { StyleRoot } from 'radium';
import {fadeIn} from 'react-animations';
import App from '../App'
import {v4 as uuidv4} from 'uuid';

//Sub-Component for Recipe Ingredient
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

const Recipe = ({recipe}) => {
    //Collect information from the served API in App.js by destructuring
    const {label, image, url, ingredients} = recipe.recipe;
    const[toggle, setToggle] = useState(false);

    //Fires every time Ingredient button is clicked
    const toggleIngredient = (e) => {
        e.preventDefault();
        setToggle(!toggle);
    }

    
   
    return (
        
        <div className = {RecipeStyles.recipe}>
             
           <img src = {image} alt = {label} />
            <h2><a href = {url} >{label}</a></h2>
            <button onClick = {toggleIngredient} href = '#'>Ingredients</button>
            
          {
              //Fires when toggle is true
              toggle && ingredients.map((ingredient) => 
              <RecipeDetails 
               
               key = {uuidv4()}
               text = {ingredient.text}
               weight = {ingredient.weight}
              />
              )
          }
            
                
            
            
        </div>
        
         
    )
}

export default Recipe;
