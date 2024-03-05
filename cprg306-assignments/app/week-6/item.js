export default function Item ({name, quantity, category}) {
  return (
    <ul className='border p-2 m-4 bg-purple-600 text-black'>
      <li className='text-xl '>{name}</li>
      <li className='text-sm ' >Category: {category}</li>
      <li className='text-sm ' >Quantity: {quantity}</li>
    </ul>
  )
}