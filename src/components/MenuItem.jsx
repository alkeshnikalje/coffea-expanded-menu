export default function MenuItem({ item, addToOrder, orderItems, decreaseQuantity }) {
  const orderItem = orderItems.find(i => i.id === item.id);

  return (
    <div className="border rounded p-4 shadow-md flex justify-between items-center">
      <span>{item.name} - Rs. {item.price}</span>
      {orderItem ? (
        <div className="flex items-center gap-2">
          <button 
            onClick={() => decreaseQuantity(item)} 
            className="bg-red-500 text-white w-6 h-6 rounded flex items-center justify-center cursor-pointer"
          >
            -
          </button>
          <span>{orderItem.quantity}</span>
          <button 
            onClick={() => addToOrder(item)} 
            className="bg-green-500 text-white w-6 h-6 rounded flex items-center justify-center cursor-pointer"
          >
            +
          </button>
        </div>
      ) : (
        <button 
          onClick={() => addToOrder(item)} 
          className="bg-green-500 text-white px-2 rounded cursor-pointer"
        >
          Add
        </button>
      )}
    </div>
  );
}
  