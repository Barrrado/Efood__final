import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import logo from '../../img/logo.png'
import { Header, Logo, Restaurante, TextoHeader } from '../../styles/PerfilHead'
import Cart from '../cart/Carrinho'

function PerfilH() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const OpenCart = () => setIsCartOpen(true)
  const CloseCart = () => setIsCartOpen(false)

  const itensDoCarrinho = useSelector((state) => state.carrinho.itens)

  const numeroDeItens = itensDoCarrinho.reduce(
    (acc, item) => acc + item.quantidade,
    0
  )
  const textoCarrinho = `${numeroDeItens} ${numeroDeItens === 1 ? 'item' : 'itens'} no Carrinho`

  return (
    <>
      <Header>
        <Restaurante to="/">Restaurantes</Restaurante>
        <Logo src={logo} alt="Logo" />
        <TextoHeader onClick={OpenCart}>{textoCarrinho}</TextoHeader>
        {isCartOpen && <Cart onCloseCart={CloseCart} />}
      </Header>
    </>
  )
}

export default PerfilH
