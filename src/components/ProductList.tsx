import * as React from "react";
import { Dialogs } from "@nativescript/core";
import { StyleSheet } from "react-nativescript";
import { ProductCard } from "./ProductCard";

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Fresh Bananas",
    price: 40,
    image: "https://picsum.photos/id/1/200"
  },
  {
    id: 2,
    name: "Organic Milk",
    price: 60,
    image: "https://picsum.photos/id/2/200"
  },
  {
    id: 3,
    name: "Whole Wheat Bread",
    price: 35,
    image: "https://picsum.photos/id/3/200"
  }
];

export function ProductList() {
  return (
    <scrollView className="bg-gray-100">
      <wrapLayout className="p-2">
        {MOCK_PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            onTap={() => Dialogs.alert(`Added ${product.name} to cart!`)}
          />
        ))}
      </wrapLayout>
    </scrollView>
  );
}