import { useState } from "react";
import MenuItem from "../components/MenuItem";
import { useNavigate, useLocation } from 'react-router-dom';

const menuItems = [
  { id: 1, name: "Espresso", price: 2.5 },
  { id: 2, name: "Latte", price: 4.0 },
  { id: 3, name: "Cappuccino", price: 3.5 },
  { id: 4, name: "Americano", price: 3.5 },
  { id: 5, name: "Mocha", price: 3.5 },
  { id: 6, name: "Macchiato", price: 3.5 },
  { id: 7, name: "Flat White", price: 3.5 },
  { id: 8, name: "Affogato", price: 3.5 },
];

export default function MenuPage() {
  const [orderItems, setOrderItems] = useState([]);
  const navigate = useNavigate();

  const addToOrder = (item) => {
    setOrderItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      return existing
        ? prev.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)
        : [...prev, { ...item, quantity: 1 }];
    });
  };

  const decreaseQuantity = (item) => {
    setOrderItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing.quantity === 1) {
        return prev.filter((i) => i.id !== item.id);
      }
      return prev.map((i) => 
        i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Menu</h1>
      <div className="space-y-2 max-h-[400px] overflow-y-auto mb-4">
        {menuItems.map((item) => (
          <MenuItem 
            key={item.id} 
            item={item} 
            addToOrder={addToOrder}
            orderItems={orderItems}
            decreaseQuantity={decreaseQuantity}
          />
        ))}
      </div>
      <button 
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        onClick={() => navigate('/receipt', { state: { orderItems } })}
      >
        Create Order
      </button>
    </div>
  );
}
