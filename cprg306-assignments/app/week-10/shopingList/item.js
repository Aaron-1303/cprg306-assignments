export default function Item ({item, onSelect}) {
  return (
    <ul className="border p-2 my-2"  onClick={() => onSelect(item)}>
      <li className="font-bold text-yellow-500">{item.name}</li>
      <li className="text-gray-400">Category: {item.category}</li>
      <li className="text-gray-400">Quantity: {item.quantity}</li>
      
    </ul>
    
  )
}