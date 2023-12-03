"use client";

import { useProductDetails } from "@/app/hooks/useProductDetail";

export default function Page({ params }: { params: { id: string } }) {
  const { data: product, isError, isLoading } = useProductDetails(params.id);

  if (isLoading) return <p>Loading....</p>;
  if (isError) return <p>Failed to fetch Products</p>;

  return (
    <div>
      <h1>Products</h1>
      <ul>{JSON.stringify(product)}</ul>
    </div>
  );
}
