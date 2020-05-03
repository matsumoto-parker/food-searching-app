import React from 'react';

const RecipeDetails = ({ ingredients }) => {
  return ingredients.map((ingredient, index) => {
    return (
      <ul key={index} className="ingredient-list">
        <li className="ingredient-text">{ingredient.text}</li>
        <li className="ingredient-weight">Weight - {ingredient.weight}</li>
      </ul>
    );
  });
};

export default RecipeDetails;
