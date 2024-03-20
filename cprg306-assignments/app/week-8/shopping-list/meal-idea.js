"use client"
import React, { useState, useEffect } from 'react';

const FetchMealIdeas = async(ingredient)=>
{ try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    const data = await response.json()
    return data.meals;
    // getting the data from API using async funciton
}
   catch(error){
    console.log(error)
   } // using try and catch to get the error if any
}
const MealIdea = ({ingredient}) =>
{
const [meals, setmeals] = useState([])


async function loadMeals() {
    
      const newMeals = await FetchMealIdeas(ingredient);
      setmeals(newMeals);

      
    }
  

useEffect(()=>{loadMeals();}, [ingredient]); // this help to stop fetching the data again and again
return (
     <div> 
    {/* // Basic XML component */}
      <h1 className="text-xl font-semibold mb-2">Meal Ideas</h1>
      <p className="mb-2">Select an item to see meal ideas</p>
      {meals && meals.length > 0 && (// Checking that if meals array exist and have some char
        <ul className="max-w-md">
          {meals.map((meal) => ( // Iterating over the meal array
            <li
              key={meal.idMeal} //This idMeal is from the API and it is used so that each element have seperate identity
              className=" border bg-purple-600 hover:bg-orange-500 cursor-pointer m-2 p-2"
            >
              {meal.strMeal} 
             {/* this is also a value from the API  */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default MealIdea;