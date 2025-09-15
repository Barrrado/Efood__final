import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { restaurantsApi } from '../service/restaurantsApi'
import carrinhoReducer from '../store/cart'
import { checkoutApi } from '../service/chekout'
import checkoutReducer from '../store/Chekout'

export const store = configureStore({
  reducer: {
    [restaurantsApi.reducerPath]: restaurantsApi.reducer,
    carrinho: carrinhoReducer,
    checkout: checkoutReducer,
    [checkoutApi.reducerPath]: checkoutApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      restaurantsApi.middleware,
      checkoutApi.middleware
    )
})

setupListeners(store.dispatch)
