import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";

function App() {
  const [carts, setCarts] = useState([]);
  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar cartCount={carts.length} />

        <main className="max-w-7xl mx-auto">{/* Banner Section */}</main>
      </div>
    </>
  );
}

export default App;
