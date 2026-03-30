import { Check } from "lucide-react";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 relative group flex flex-col h-full text-left">
      {/* Tag */}
      <span className="absolute top-6 right-6 bg-orange-50 text-orange-600 text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
        {product.tagType}
      </span>
      {/* Icon */}
      <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-purple-50">
        <img src={product.icon} alt={product.name} />
      </div>
      <h3 className="text-2xl font-bold text-[#101727] mb-4 tracking-tight">
        {product.name}
      </h3>
      <p className="text-[#627382] text-base leading-relaxed mb-8 h-20 overflow-hidden">
        {product.description}
      </p>
      {/* pricing */}
      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-4xl font-bold text-[#101727]">
          ${product.price}
        </span>
        <span className="text-[#627382] font-bold uppercase text-xs">
          /{product.period}
        </span>
      </div>
      {/* features list  */}
      <div className="space-y-3 mb-8 grow">
        {product.features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-gray-600 font-semibold text-sm"
          >
            <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-[10px]">
              <Check />
            </span>
            <span>{feature}</span>
          </div>
        ))}
      </div>
      {/* buy btn */}
      <button className="btn btn-primary w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-black py-5 rounded-2xl transition-all shadow-lg shadow-purple-100">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
