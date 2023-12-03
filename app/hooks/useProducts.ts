import { useQuery } from "@tanstack/react-query";
import { Product } from "../interfaces/Product";

export const fetchProducts = async (): Promise<Product[]> => {
  return fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products`)
    .then((res) => res.json())
    .catch((e) => console.error(e));
};

export const useProduct = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
