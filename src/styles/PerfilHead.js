import styled from 'styled-components'
import Fundo from '../img/Vector.png'
import { Link } from 'react-router'

export const Header = styled.header`
  background-image: url(${Fundo});
  height: 170px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: auto;
    height: 89px;
  }
`
export const TextoHeader = styled.h2`
  color: hsla(0, 72%, 65%, 1);
  font-weight: 900;
  font-size: 16px;
  font-family: Roboto;
  text-align: center;
  cursor: pointer;
  @media (max-width: 600px) {
    grid-column: 1;
    grid-row: 2;
  }
`
export const Logo = styled.img`
  width: 125px;
  @media (max-width: 600px) {
    grid-column: 2;
    grid-row: 1 / 3;
  }
`
export const Restaurante = styled(Link)`
  color: hsla(0, 72%, 65%, 1);
  font-weight: 900;
  font-size: 16px;
  font-family: Roboto;
  text-align: center;
  text-decoration: none;
  @media (max-width: 600px) {
    grid-row: 1;
    grid-column: 1;
  }
`
