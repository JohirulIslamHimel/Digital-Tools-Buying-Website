import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Stats from "./component/Stats";
import ProductSection from "./component/ProductSection";
import Tabs from "./component/Tabs";
import Card from "./component/Card";
import Steps from "./component/Steps";
import Pricing from "./component/Pricing";
import Workflow from "./component/Workflow";
import Footer from "./component/Footer";
import { ToastContainer } from "react-toastify";

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

        {activeTabs === "Products" && (
          <>
            <Banner></Banner>
            <Stats></Stats>
            <Tabs
              activeTabs={activeTabs}
              setActiveTabs={setActiveTabs}
              carts={carts}
            ></Tabs>
            <Suspense
              fallback={
                <span className="$$loading $$loading-spinner $$loading-sm"></span>
              }
            >
              <ProductSection
                productPromise={productPromise}
                carts={carts}
                setCarts={setCarts}
              ></ProductSection>
            </Suspense>
            <Steps></Steps>
            <Pricing></Pricing>
            <Workflow></Workflow>
          </>
        )}

        {activeTabs === "Cart" && (
          <>
            <Tabs
              activeTabs={activeTabs}
              setActiveTabs={setActiveTabs}
              carts={carts}
            ></Tabs>
            <Card
              carts={carts}
              setCarts={setCarts}
              setActiveTabs={setActiveTabs}
            ></Card>
          </>
        )}

        <Footer></Footer>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
