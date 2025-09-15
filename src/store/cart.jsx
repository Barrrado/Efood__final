import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action) => {
      const itemNovo = action.payload
      const itemExistente = state.itens.find((item) => item.id === itemNovo.id)

      if (itemExistente) {
        itemExistente.quantidade += 1
      } else {
        state.itens.push({ ...itemNovo, quantidade: 1 })
      }
    },
    removerDoCarrinho: (state, action) => {
      const itemId = action.payload
      const itemExistente = state.itens.find((item) => item.id === itemId)

      if (itemExistente) {
        if (itemExistente.quantidade > 1) {
          itemExistente.quantidade -= 1
        } else {
          state.itens = state.itens.filter((item) => item.id !== itemId)
        }
      }
    },

    removerItemCompletamente: (state, action) => {
      const itemId = action.payload
      state.itens = state.itens.filter((item) => item.id !== itemId)
    },
    clearCart: (state) => {
      state.itens = []
    }
  }
})

export const {
  adicionarAoCarrinho,
  removerDoCarrinho,
  removerItemCompletamente,
  clearCart
} = carrinhoSlice.actions

export default carrinhoSlice.reducer
