import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../util/constants";
import { Product } from "../interfaces/Product";

export const fetchProducts = async (): Promise<Product[]> => {
  return fetch(`${BASE_URL}/products`)
    .then((res) => res.json())
    .catch((e) => console.error(e));
};

export const useProduct = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
