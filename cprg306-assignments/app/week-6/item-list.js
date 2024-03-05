"use client"
import Item from './item';
const { useState } = require('react');

export default function ItemList ({name, quantity, category, items}) {
	const [sortBy, setSortBy] = useState("name");

	const itemList = [...items].sort((a, b) => {
		if (sortBy === 'name') {
			return a.name.localeCompare(b.name);
		} else if (sortBy === 'category') {
			return a.category.localeCompare(b.category);
		}

		return 0;
	});

    return (
		<div>
			<button className= "border border-yellow-500  px-4 py-2 mr-4" onClick={() => setSortBy('name')}>Sort By Name</button>
      		<button className="border border-yellow-500  px-4 py-2 mr-4" onClick={() => setSortBy('category')}>Sort By Category</button>
			<ul>
				{ itemList.map((item) => (
					<li className="bg-purple-600 my-3" key={item.id}>
						<Item name={item.name} quantity={item.quantity} category={item.category}></Item>
					</li>
				))}
			</ul>
		</div>
    )
}