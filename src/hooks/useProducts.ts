// hooks/useProducts.ts
import { useQuery } from "@tanstack/react-query";
import { fetchProductsClient } from "@/lib/client/products";

export const useProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: fetchProductsClient,
    });
};
