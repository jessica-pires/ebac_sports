import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'
type CarrinhoState = {
  itens: Produto[]
}
const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const itemProduto = action.payload
      if (state.itens.find((i) => i.id === itemProduto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(itemProduto)
      }
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
