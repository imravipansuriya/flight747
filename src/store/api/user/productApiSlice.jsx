import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "../apiSlice";

export const productApiSlice = createApi({
  reducerPath: "productList",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getCategoryList: builder.query({
      query: () => `home/categories`,
    }),
    getProductListById: builder.query({
      query: (id) => `home/product/${id}`,
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/user/auth/signup",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetCategoryListQuery, useGetProductListByIdQuery,useRegisterMutation } = productApiSlice;
