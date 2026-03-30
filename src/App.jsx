import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Stats from "./component/Stats";
import ProductSection from "./component/ProductSection";

const getProducts = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const productPromise = getProducts();

function App() {
  const [carts, setCarts] = useState([]);
  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar cartCount={carts.length} />

        <Banner></Banner>
        <Stats></Stats>
        <Suspense
          fallback={
            <span class="$$loading $$loading-spinner $$loading-sm"></span>
          }
        >
          <ProductSection productPromise={productPromise}></ProductSection>
        </Suspense>
      </div>
    </>
  );
}

export default App;
