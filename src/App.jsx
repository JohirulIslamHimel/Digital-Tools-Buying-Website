import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Stats from "./component/Stats";

function App() {
  const [carts, setCarts] = useState([]);
  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar cartCount={carts.length} />

        <Banner></Banner>
        <Stats></Stats>
      </div>
    </>
  );
}

export default App;
