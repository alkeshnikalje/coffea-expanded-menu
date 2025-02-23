import { Routes, Route, Link } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import Receipt from "./components/Receipt";
import { useLocation } from "react-router-dom";

function ReceiptWrapper() {
  const location = useLocation();
  const orderItems = location.state?.orderItems || [];
  return <Receipt orderItems={orderItems} />;
}

export default function App() {
  return (
    <div className="max-w-lg mx-auto p-4">

      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/receipt" element={<ReceiptWrapper />} />
      </Routes>
    </div>
  );
}