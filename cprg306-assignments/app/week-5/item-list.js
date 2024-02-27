'use client';

import React , {useState} from "react";
import jsonItem from "./items.json";
import Item from "./item";

const ItemList = ()=>{
    // console.log(jsonItem)
const [sortBy, setSortBy] = useState("name")

const sortedItems = [...jsonItem].sort((a,b)=>{
if (sortBy==="name"){
    return a.name.localeCompare(b.name);
}
else if(sortBy==="category"){
    return a.category.localeCompare(b.category);

}
return 0;
});
 
    
    

return (
    <div>
        <main>
            <span className="mr-4">Sort By</span>
            <button
             onClick={()=> {setSortBy("name")}}
             className={`border border-yellow-100  px-4 py-2 mr-4 ${sortBy === "name" ? "bg-purple-400 text-white" : ""}`}
             > Name</button>


            <button onClick={()=> {setSortBy("category")}}
             className={`border border-yellow-100 px-4 py-2 mr-4 ${sortBy === "category" ? "bg-purple-400 text-white" : ""}`} 
             
            
            > Category</button>


        </main>
    <ul className="inline">
      {sortedItems.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </ul>
    </div>
  );
      }

export default ItemList;