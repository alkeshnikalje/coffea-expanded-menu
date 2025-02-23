export default function Receipt({ orderItems }) {
  const totalAmount = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  console.log(orderItems);

  return (
    <div className="print-container">
      <h2 className="text-center font-bold">Receipt</h2>
      <ul className="my-2">
        {orderItems.map((item) => (
          <li key={item.id} className="flex justify-between">
            <span>{item.name} x {item.quantity}</span>
            <span>Rs. {(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between font-bold border-t pt-2">
        <span>Total</span>
        <span>Rs. {totalAmount.toFixed(2)}</span>
      </div>
      <button 
        onClick={() => window.print()} 
        className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors print:hidden cursor-pointer"
      >
        Print Receipt
      </button>
    </div>
  );
}
  