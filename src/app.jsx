import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import RecipeCard from "./components/RecipeCard";
import Sidebar from "./components/Sidebar";
import recipes from "./data/recipes.json";

const App = () => {
  const [wantToCook, setWantToCook] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  const addToWantToCook = (recipe) => {
    if (!wantToCook.find((r) => r.id === recipe.id)) {
      setWantToCook([...wantToCook, recipe]);
    } else {
      alert("This recipe is already in the 'Want to Cook' list!");
    }
  };

  const moveToCooking = (recipe) => {
    setWantToCook(wantToCook.filter((r) => r.id !== recipe.id));
    setCurrentlyCooking([...currentlyCooking, recipe]);
  };

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <main>
        <div className="recipes">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onWantToCook={addToWantToCook}
            />
          ))}
        </div>
        <Sidebar
          wantToCook={wantToCook}
          currentlyCooking={currentlyCooking}
          onMoveToCooking={moveToCooking}
        />
      </main>
    </div>
  );
};

export default App;
