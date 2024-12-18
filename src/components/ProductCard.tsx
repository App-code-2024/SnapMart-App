import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  onTap: () => void;
}

export function ProductCard({ name, price, image, onTap }: ProductCardProps) {
  return (
    <gridLayout 
      className="bg-white rounded-lg m-2 p-4 shadow"
      rows="*, auto, auto"
      columns="*"
      onTap={onTap}
    >
      <image
        row={0}
        src={image}
        className="w-32 h-32 rounded-lg"
        stretch="aspectFill"
      />
      <label 
        row={1} 
        className="text-lg font-semibold mt-2"
        textWrap={true}
      >
        {name}
      </label>
      <label 
        row={2}
        className="text-green-600 font-bold"
      >
        ₹{price.toFixed(2)}
      </label>
    </gridLayout>
  );
}