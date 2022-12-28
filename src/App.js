import React, {useEffect, useState} from "react";
import './App.css';
import Form from './components/Form';
import Recipe from './components/Recipe';
import Loader from "./components/Loader";


function App() {
  const [ recipes, setRecipes ] = useState([]);
  const [ query, setQuery ] = useState('salad');
  const [ load, setLoad ] = useState(false);

  //Fetching API
  const year = new Date();
  const url =`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=96cf4a4c&app_key=${process.env.REACT_APP_API_KEY}&imageSize=REGULAR`;

  async function fetchRecipes(){
    try{
      setLoad(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error ("Oops! Looks like we exceeded the maximum amount of allowed requests. Sorry! Try again in a minute." + response.status);
      }
      const data = await response.json();
      setRecipes(data.hits);
      setLoad(false);
    }
    catch{
      alert(Error);
    }
  }
  
  //State, Effect

  useEffect( () =>{
    fetchRecipes();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const searchRecipe = ( recipe ) =>{
    setQuery(recipe);
  }

  return (
    <div className="App">
      <Form  onSearchRecipe={searchRecipe} />
      { load ? <Loader /> :
        <div className="recipe-container">
          {recipes.map( recipe => (
            <Recipe  
              key={Math.random() * 1000000} 
              title={recipe.recipe.label} 
              calories={recipe.recipe.calories} 
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              mealType={recipe.recipe.dishType}
              cuisineType={recipe.recipe.cuisineType}
              healthLabels={recipe.recipe.healthLabels}
              url={recipe.recipe.url}
            />
            ))}
          {(recipes.length === 0) ? <h3 className="no-hits">No hits!!! Try something else.</h3> : ''}
        </div>
      }
      <footer>
        <p>&copy; {year.getFullYear()} by <a href="https://marjan-zivkovic.com/" target="_blank" rel="noreferrer">Marjan</a></p>
        <small>Powered by <a href="https://www.edamam.com/" target="_blank" rel="noreferrer">Edamam API</a></small>
      </footer>
    </div>
  );
}

export default App;
