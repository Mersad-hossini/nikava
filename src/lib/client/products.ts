import axiosInstance from "./axios";

export const fetchProductsClient = async () => {
    const response = await axiosInstance.get("/products");
    return response.data;
};