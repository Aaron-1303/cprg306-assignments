export default function Item ({item, onSelect}) {
  return (
    <ul className='max-w-md border p-2 m-4 bg-purple-600 text-black ' onClick={()=>onSelect(item)}>
      <li className='max-w-md text-xl '>{item.name}</li>
      <li className='max-w-md text-sm ' >Category: {item.category}</li>
      <li className='max-w-md text-sm ' >Quantity: {item.quantity}</li>
    </ul>
  )
}