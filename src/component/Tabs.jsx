import React from "react";

const Tabs = ({ activeTabs, setActiveTabs, carts }) => {
  return (
    <div className="flex justify-center my-10">
      <div className="tabs tabs-box bg-gray-100 p-2 rounded-2xl">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-xl! font-bold checked:bg-[#7C3AED]! checked:text-white!"
          aria-label="Products"
          checked={activeTabs === "Products"}
          onClick={() => setActiveTabs("Products")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-xl! font-bold checked:bg-[#7C3AED]! checked:text-white!"
          aria-label={`Cart `}
          checked={activeTabs === "Cart"}
          onClick={() => setActiveTabs("Cart")}
        />
      </div>
    </div>
  );
};

export default Tabs;
