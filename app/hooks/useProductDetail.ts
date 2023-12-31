import { useQuery } from "@tanstack/react-query";
import { Product } from "../interfaces/Product";

export const fetchProductDetails = (id: string): Promise<Product> => {
  return fetch(`/api/products/${id}`)
    .then((res) => res.json())
    .then((data) => data.res)
    .catch((e) => console.error(e));
};

export const useProductDetails = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductDetails(id),
  });
};
