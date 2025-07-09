import { serverFetcher } from "./fetcher";

export async function fetchProductsServer() {
    return await serverFetcher("/products");
}
