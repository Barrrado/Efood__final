import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { removerDoCarrinho } from '../../store/cart'
import lixeira from '../../img/c2510f15841e4855c13cfe444448798eeb37c734.png'
import {
  CartDiv,
  CartModal,
  ConteinerCart,
  BtnCart,
  BtnLixo,
  TextCard,
  TextCart2,
  Total,
  ListaCart,
  Lixeira,
  ListaCarrinho,
  ImgFoto,
  CartTexto,
  BtnCartx
} from '../../styles/Cart'
import Entrega from '../Entrega/Endereço'

const Carrinho = ({ onCloseCart }) => {
  const itens = useSelector((state) => state.carrinho.itens)
  const dispatch = useDispatch()

  const [isEndOpen, setIsEndOpen] = useState(false)
  const OpenEnd = () => setIsEndOpen(true)
  const CloseEnd = () => setIsEndOpen(false)

  const handleRemoverDoCarrinho = (id) => {
    dispatch(removerDoCarrinho(id))
  }
  const total = itens.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  )
  const ClickCart = (e) => {
    e.stopPropagation()
  }

  return (
    <CartModal onClick={onCloseCart}>
      <CartDiv onClick={ClickCart}>
        {isEndOpen && (
          <Entrega onCloseEnd={CloseEnd} onCloseCart={onCloseCart} />
        )}
        <BtnCartx onClick={onCloseCart}>X</BtnCartx>
        {itens.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <ListaCarrinho>
            {itens.map((item) => (
              <ListaCart key={item.id}>
                <ConteinerCart>
                  <ImgFoto src={item.foto} alt="" />
                  <CartTexto>
                    <TextCard>
                      {item.nome}
                      {item.quantidade > 1 && ` (${item.quantidade}x)`}
                    </TextCard>
                    <TextCart2>
                      R$ {(item.preco * item.quantidade).toFixed(2)}
                    </TextCart2>
                  </CartTexto>
                  <BtnLixo onClick={() => handleRemoverDoCarrinho(item.id)}>
                    <Lixeira src={lixeira} alt="" />
                  </BtnLixo>
                </ConteinerCart>
              </ListaCart>
            ))}
          </ListaCarrinho>
        )}
        <Total>
          <h4>Valor Total:</h4>
          <h4>R${total.toFixed(2)}</h4>
        </Total>
        {itens.length > 0 ? (
          <BtnCart onClick={OpenEnd}>CONTINUAR PARA ENTREGA</BtnCart>
        ) : (
          <p>Por favor Adicione pelo Menos 1 ou mais itens no carrinho</p>
        )}
      </CartDiv>
    </CartModal>
  )
}

export default Carrinho
