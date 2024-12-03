import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ wantToCook, currentlyCooking, onMoveToCooking }) => {
  return (
    <aside className="sidebar">
      <h2>Want to Cook: {wantToCook.length}</h2>
      <ul>
        {wantToCook.map((recipe) => (
          <li key={recipe.id}>
            {recipe.name} - {recipe.preparationTime} - {recipe.calories} cal
            <button onClick={() => onMoveToCooking(recipe)}>Preparing</button>
          </li>
        ))}
      </ul>
      <h2>Currently Cooking: {currentlyCooking.length}</h2>
      <ul>
        {currentlyCooking.map((recipe) => (
          <li key={recipe.id}>
            {recipe.name} - {recipe.preparationTime} - {recipe.calories} cal
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
