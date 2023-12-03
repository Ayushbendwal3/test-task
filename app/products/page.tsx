"use client";

import { useProduct } from "../hooks/useProducts";
import { Product } from "../interfaces/Product";

export default function Page() {
  const { data: products, isError, isLoading } = useProduct();

  if (isLoading) return <p>Loading....</p>;
  if (isError) return <p>Failed to fetch Products</p>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products?.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}
