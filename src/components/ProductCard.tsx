"use client";

import Image from "next/image";
import type { Product } from "@/lib/productsData";
import { useState } from "react";

export default function ProductCard({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <article className="group flex flex-col justify-between h-full rounded-2xl bg-white border border-gray-100 transition-all duration-300 shadow-[0_0_16px_rgba(0,0,0,0.08)] hover:shadow-[0_0_24px_rgba(0,0,0,0.15)]">
      <div className="flex items-center justify-center h-44 bg-gray-50 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={180}
          height={180}
          className="p-4 transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col grow p-5">
        <h3 className="mb-1 text-base font-bold text-gray-800 leading-snug">
          {product.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-cyan-600 text-base font-bold">
            {product.price}
          </span>
          <button
            onClick={handleAddToCart}
            disabled={added}
            className={`rounded-full px-4 py-1.5 text-sm font-medium shadow-[0_0_12px_rgba(0,0,0,0.12)] cursor-pointer transition-all ${
              added
                ? "bg-cyan-600 text-white cursor-default"
                : "bg-primary hover:bg-primary-dark text-black"
            }`}
          >
            {added ? "✔ أضيفت" : "أضف إلى السلة"}
          </button>
        </div>
      </div>
    </article>
  );
}
