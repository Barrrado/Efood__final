import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const checkoutApi = createApi({
  reducerPath: 'checkoutApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    checkout: builder.mutation({
      query: (deliveryData) => ({
        url: 'checkout',
        method: 'POST',
        body: deliveryData
      })
    })
  })
})

export const { useCheckoutMutation } = checkoutApi
