import { Check } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";

const ProductCard = ({ product, carts, setCarts }) => {
  const isExist = carts.find((item) => item.id === product.id);
  const handleAddCart = () => {
    setCarts([...carts, product]);
    toast.success("Added successfully");
    // alert("Added successfully");
  };
  const tagStyles = {
    "best seller": "bg-[#FEF3C6] text-[#BB4D00]",
    popular: "bg-blue-100 text--600 text-[#9514FA]",
    new: "bg-green-100 text-green-600",
  };
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 relative group flex flex-col h-full text-left">
      {/* Tag */}
      <span
        className={`absolute top-6 right-6 ${tagStyles[product.tagType?.toLowerCase()] || "bg-gray-100 text-gray-600"} text-[10px] font-bold px-3 py-1 rounded-full  tracking-widest shadow-sm inline-block whitespace-nowrap`}
      >
        {product.tagType}
      </span>
      {/* Icon */}
      <div className="w-15 h-15 bg-gray-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-purple-50">
        <img src={product.icon} alt={product.name} />
      </div>
      <h3 className="text-2xl font-bold text-[#101727] mb-4 tracking-tight">
        {product.name}
      </h3>
      <p className="text-[#627382] text-base leading-relaxed mb-5 h-12 overflow-hidden">
        {product.description}
      </p>
      {/* pricing */}
      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-3xl font-bold text-[#101727]">
          ${product.price}
        </span>
        <span className="text-[#627382] font-bold uppercase text-xs">
          /{product.period}
        </span>
      </div>
      {/* features list  */}
      <div className="space-y-3 mb-6 grow">
        {product.features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-gray-600 font-semibold text-sm"
          >
            <span className="w-4 h-4 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-[10px]">
              <Check size={10} strokeWidth={3} />
            </span>
            <span>{feature}</span>
          </div>
        ))}
      </div>
      {/* buy btn */}
      <button
        onClick={handleAddCart}
        disabled={isExist}
        className={`w-full py-3 rounded-2xl transition-all font-black flex items-center justify-center gap-2 mt-auto cursor-pointer ${
          isExist
            ? "bg-green-500 text-white cursor-not-allowed opacity-90"
            : "bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-lg shadow-purple-100"
        }`}
      >
        {isExist ? (
          <>
            <Check size={20} /> Added to Cart
          </>
        ) : (
          "Buy Now"
        )}
      </button>
    </div>
  );
};

export default ProductCard;
