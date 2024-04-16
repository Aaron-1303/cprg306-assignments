"use client"
import { useState, useEffect } from 'react';

import ItemList from './item-list'
import NewItem from './new-item'
import ItemsData from './items.json';
import MealIdea from './meal-idea';




export default function Page() {
	const [itemList, setItemList] = useState(ItemsData);
	const [selectedItemName, setselectedItemName] = useState(null)

	function handleAddItem(newItem) {
		setItemList([...itemList, newItem]);

	}
	function handleItemSelect(item) {

		const cleanedName = item.name.replace(/(,.*|🍛|🥛|🍞|🥚|🍌|🥦|🍗|🍝|🧻|🍽️|🧼)/g, '').trim();
		setselectedItemName(cleanedName);
	}
	return (
		<main className="min-h-screen flex-col items-center justify-between p-24">
			<div className="flex w-full">
				<div>
				<h1 className="font-bold text-4xl text-black-500 items">My Shopping List</h1>
				<NewItem onAddItem={e => handleAddItem(e)}></NewItem>

				<ItemList items={itemList} onItemSelect={(item) => handleItemSelect(item)} />
				</div>
				
				<div className="md:w-1/2 p-4 ml-8">
					<MealIdea ingredient={selectedItemName} />
				</div>
			</div>


		</main>
	)
}

