import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  delivery: {},
  payment: {}
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
    setDelivery: (state, action) => {
      state.delivery = action.payload
    },
    setPayment: (state, action) => {
      state.payment = action.payload
    },
    resetCheckout: (state) => {
      state.products = []
      state.delivery = {}
      state.payment = {}
    }
  }
})

export const { setProducts, setDelivery, setPayment, resetCheckout } =
  checkoutSlice.actions
export default checkoutSlice.reducer
