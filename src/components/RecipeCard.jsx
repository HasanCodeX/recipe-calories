import React from "react";
import "./RecipeCard.css";

const RecipeCard = ({ recipe, onWantToCook }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <p>Ingredients: {recipe.ingredients.length}</p>
      <ul>
        {recipe.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
      <p>Preparation Time: {recipe.preparationTime}</p>
      <p>Calories: {recipe.calories}</p>
      <button onClick={() => onWantToCook(recipe)}>Want to Cook</button>
    </div>
  );
};

export default RecipeCard;
