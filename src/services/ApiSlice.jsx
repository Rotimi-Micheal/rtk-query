import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductsApi = createApi({
  reducerPath: "ProductsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({ query: () => `products` }),
  }),
});

export const { useGetProductsQuery } = ProductsApi;
