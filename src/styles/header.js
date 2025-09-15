import styled from 'styled-components'
import Fundo from '../img/Vector.png'

export const Header = styled.header`
  background-image: url(${Fundo});
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
export const TextoHeader = styled.h1`
  color: hsla(0, 72%, 65%, 1);
  font-weight: 900;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0;
  width: 539px;
  font-family: Roboto;
  text-align: center;

  @media (max-width: 360px) {
    width: auto;
  }
`
export const Logo = styled.img`
  width: 125px;
`

export const CarrinhoHeader = styled.div`
  display: flex;
  align-items: center;
`
export const CartImg = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`

export const QuantP = styled.p`
  color: hsla(0, 72%, 65%, 1);
  font-weight: 900;
  font-size: 20px;
`
