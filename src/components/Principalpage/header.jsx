import React from 'react'
import logo from '../../img/logo.png'
// import CART from '../../img/icons8-carrinho-48.png'
import { Header, Logo, TextoHeader } from '../../styles/header'

// import { useSelector } from 'react-redux'
// import Cart from '../cart/Carrinho'

function Cabeçalho() {
  // const [isCartOpen, setIsCartOpen] = useState(false)
  // const OpenCart = () => setIsCartOpen(true)
  // const CloseCart = () => setIsCartOpen(false)

  // const itensDoCarrinho = useSelector((state) => state.carrinho.itens)

  // const numeroDeItens = itensDoCarrinho.reduce(
  //   (acc, item) => acc + item.quantidade,
  //   0
  // )

  return (
    <>
      <Header>
        <Logo src={logo} alt="Logo" />
        <TextoHeader>
          Viva Experiencias Gastrononicas no conforto da sua casa{' '}
        </TextoHeader>
        {/* <CarrinhoHeader>
          <QuantP>{numeroDeItens} </QuantP>
          <CartImg onClick={OpenCart} src={CART}></CartImg>
          {isCartOpen && <Cart onClose={CloseCart} />}
        </CarrinhoHeader> */}
      </Header>
    </>
  )
}
export default Cabeçalho
