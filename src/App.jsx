import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Stats from "./component/Stats";
import ProductSection from "./component/ProductSection";
import Tabs from "./component/Tabs";
import Card from "./component/Card";

const getProducts = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const productPromise = getProducts();

function App() {
  const [activeTabs, setActiveTabs] = useState("Products");
  const [carts, setCarts] = useState([]);
  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar cartCount={carts.length} />

        <Banner></Banner>
        <Stats></Stats>
        <Tabs
          activeTabs={activeTabs}
          setActiveTabs={setActiveTabs}
          carts={carts}
        ></Tabs>
        <Suspense
          fallback={
            <span class="$$loading $$loading-spinner $$loading-sm"></span>
          }
        >
          {activeTabs === "Products" && (
            <ProductSection
              productPromise={productPromise}
              carts={carts}
              setCarts={setCarts}
            ></ProductSection>
          )}
        </Suspense>

        {activeTabs === "Cart" && (
          <Card
            carts={carts}
            setCarts={setCarts}
            setActiveTabs={setActiveTabs}
          ></Card>
        )}
      </div>
    </>
  );
}

export default App;
