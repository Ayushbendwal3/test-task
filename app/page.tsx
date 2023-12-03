"use client";

import Card from "./components/Card";
import { useProduct } from "@/app/hooks/useProducts";
import Loader from "./components/Loader";

export default function Home() {
  const { data: products, isError, isLoading } = useProduct();

  if (isLoading) return <Loader />;
  if (isError) return <p>Failed to fetch Products</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5 bg-teal-400">
      {products?.map((product) => (
        <div className="flex items-center justify-center" key={product.id}>
          <Card {...product} />
        </div>
      ))}
    </div>
  );
}
