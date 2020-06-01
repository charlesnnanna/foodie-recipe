//Import all necessary modules
import React, {useState} from 'react';
import Recipe from './components/Recipe';
import RecipeStyles from './components/Recipe.module.css'
import Loader from 'react-loader-spinner';
import {v4 as uuidv4} from 'uuid';
import './App.css';
import Axios from 'axios';
import Radium, { StyleRoot } from 'radium';
import {fadeIn} from 'react-animations';
import RecipeDetails from './components/RecipeDetails';



const App = () => {
    //for searched input
    const [query, setQuery] = useState('');
    //requested recipes
    const [recipes, setRecipes] = useState([]);
    const [toggle , setToggle] = useState(false);
    const [loaderToggle, setLoaderToggle] = useState(false);
    const APP_ID = "957cbac5";
    const APP_KEY = "bc765935561c0ec738a375a784e90823";
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
 //using react-animations
    const styles = {
        fadeIn: {
            animation: 'x 1s',
            animationName : Radium.keyframes(fadeIn, 'fadeIn')
        }
    }


    //GET reuested recipe API
    const getData = async() => {

       
        setLoaderToggle(true);
        console.log(RecipeStyles.container);
    
        const result = await Axios.get(url);
        setRecipes(result.data.hits);
        setToggle(true);
        console.log(result);

        setTimeout(() => {
            setLoaderToggle(false);
        
        }, 8000);
    }

  
   //Event that fires when you submit form
    const onSubmit = (e) => {
        e.preventDefault();
        getData();
    }


    
    //Event that fires everytime you type a letter in the search input field
    const onChange = (e) => {
        setQuery(e.target.value);
    }

    

    return(
        <StyleRoot>
        <div className = 'App'>
            <h1 onClick = {getData}>Foodie Searching App</h1>
            <form className = 'search-form' onSubmit = {onSubmit}>
                <input type = 'text' placeholder = 'Search Food'
                 onChange = {onChange} autoComplete = 'off' value = {query} />
                <input type = 'submit' value = 'Search'/>
            </form>


         <Loader
                className = 'loader'
                type = 'Puff'
                color = '#3498db'
                visible = {loaderToggle}
                />   

    
            {
                //Fires when loaderToggle is false
                loaderToggle=== false && <div  
                style = {styles.fadeIn}
                className = {RecipeStyles.container} >
               
           
                {   //Fires when toggle is true
                    toggle && recipes.map((recipes,index) => 
                    <Recipe key = {uuidv4()}
                    recipe = {recipes}    
                    />  
                    ) 
                }

              
            </div>}
        </div>
        </StyleRoot>
    )
}

export default App;


