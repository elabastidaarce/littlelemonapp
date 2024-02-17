import React from "react";
import recipes from "../recipes";
import MenuCard from "./MenuCard";

const Menu = () => {
return (
    <div className='menu-container'>
        <div className='menu-header'>
            <h2>The week's specials!</h2>
            <button>Order Menu</button>
        </div>
        <div className='cards'>
        {
            recipes.map((recipe) => {
                return (
                    <MenuCard key={recipe.id} recipe={recipe}></MenuCard>
                )
            })
        }
        </div>
    </div>
);
};

export default Menu;