// page.js

import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <div className="bg-yellow-400 min-h-screen">
      {/*/ background changes yet to be made*/}  
    <div className="container mx-auto  ">
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
      <ItemList />
    </div>
     </div>
  );
};

export default Page;
