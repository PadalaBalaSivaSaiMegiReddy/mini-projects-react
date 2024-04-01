import { Route, Routes } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";

export default function App() {
  return (
    <div>
      <h1>Navbar</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
