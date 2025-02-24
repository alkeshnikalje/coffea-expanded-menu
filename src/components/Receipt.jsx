import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Receipt({ orderItems }) {
  const [isPrinted, setIsPrinted] = useState(false);
  const navigate = useNavigate();
  const totalAmount = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handlePrint = () => {
    window.print();
    setIsPrinted(true);
  };

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
      {!isPrinted ? (
        <button 
          onClick={handlePrint} 
          className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors print:hidden cursor-pointer"
        >
          Print Receipt
        </button>
      ) : (
        <button 
          onClick={() => navigate('/', { state: { clearOrder: true } })} 
          className="w-full mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors print:hidden cursor-pointer"
        >
          Menu
        </button>
      )}
    </div>
  );
}
  