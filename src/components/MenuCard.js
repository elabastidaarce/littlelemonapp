import React from "react";

const MenuCard = ({ recipe }) => {

    const submitOrder = () => {
        if (window.confirm('Do you want to confirm your order?')) {
            alert ('Order confirmed!')
        } else {
            alert ('Order was cancelled')
        }
    }

    return (
        <div className='menu-items'>
            <img src={recipe.image} alt={recipe.title} className='item-img'></img>
            <div className='item-menu'>
                <div className='item-heading'>
                    <h5>{recipe.title}</h5>
                    <p>${recipe.price}</p>
                </div>
                <p>{recipe.description}</p>
                <button className='orderbtn' onClick={submitOrder}>Order it now!</button>
            </div>
        </div>
    );
};

export default MenuCard;