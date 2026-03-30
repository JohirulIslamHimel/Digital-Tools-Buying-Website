import React from "react";

const Card = ({ carts, setCarts, setActiveTabs }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const removeItem = (id) => {
    const remaining = carts.filter((item) => item.id !== id);
    setCarts(remaining);
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      {/* main container */}
      <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-left">
          Your Cart
        </h2>

        {carts.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-400 font-medium">Your cart is empty.</p>
            <button
              onClick={() => setActiveTabs("Products")}
              className="text-[#7C3AED] mt-2 font-bold underline cursor-pointer"
            >
              Shop Now
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {carts.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-5 bg-gray-50/50 border border-gray-50 rounded-2xl transition-all hover:bg-gray-50"
              >
                {/* left side : image & name*/}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm p-2">
                    <img
                      src={`/${item.icon}`}
                      alt={item.name}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-sm font-medium">
                      ${item.price}
                    </p>
                  </div>
                </div>

                {/* right side remove btn */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-pink-500 hover:text-pink-600 font-bold text-sm transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Total section */}
            <div className="flex justify-between items-center pt-8 mt-6">
              <span className="text-[#627382] font-bold text-sm">Total:</span>
              <span className="text-3xl font-black text-[#101727]">
                ${totalPrice}
              </span>
            </div>

            {/* Checkout btn */}
            <button className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold py-4 rounded-full mt-6 transition-all shadow-lg shadow-purple-100 active:scale-[0.98]">
              Proceed To Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
