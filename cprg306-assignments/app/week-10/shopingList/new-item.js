'use client'

import { useState } from 'react';

export default function NewItem ({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    function handleSubmit (event) {
        event.preventDefault();

        onAddItem({ name, quantity, category });

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <form className="p-2 m-2 text-black bg-orange-300 max-w-sm w-full rounded-md">
            <label>Name: </label>
            <input className="p-2 mb-2 rounded-md w-full" type="text" value={name} onChange={e => setName(e.target.value)} required/><br/>
            <label>Quantity: </label>
            <input className="p-2 mb-2 rounded-md w-full" type="number" value={quantity} min="1" max="99" onChange={e => setQuantity(parseInt(e.target.value))} required/><br/>
            <label>Category: </label>
            <select className="p-2 mb-2 rounded-md w-full" value={category} onChange={e => setCategory(e.target.value)}>
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen foods">Frozen Foods</option>
                <option value="canned goods">Canned Goods</option>
                <option value="dry goods">Dry goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
            </select><br/>

            <button type="submit" onClick={e => handleSubmit(e)} className="bg-green-500 w-full p-1.5 rounded-lg mb-2 text-white">Submit</button>
        </form>
    )
}