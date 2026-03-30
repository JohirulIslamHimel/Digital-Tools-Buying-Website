import React from "react";

const Tabs = ({ activeTabs, setActiveTabs, carts }) => {
  return (
    <div className="flex justify-center my-10">
      <div className="tabs tabs-box bg-gray-100 p-2 rounded-full border border-gray-200">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full! px-8! h-12! font-bold checked:bg-[#7C3AED]! checked:text-white!"
          aria-label="Products"
          checked={activeTabs === "Products"}
          onChange={() => setActiveTabs("Products")}
          //   defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full! px-8! h-12! font-bold checked:bg-[#7C3AED]! checked:text-white!"
          aria-label={`Cart (${carts.length})`}
          checked={activeTabs === "Cart"}
          onChange={() => setActiveTabs("Cart")}
        />
      </div>
    </div>
  );
};

export default Tabs;
