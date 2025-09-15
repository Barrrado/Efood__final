import styled from 'styled-components'

export const CartModal = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.466);
  z-index: 20;
  height: 100%;
  top: 0px;
  align-items: flex-end;
  width: 100%;
  left: 0px;
`
export const ListaCarrinho = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0;
  margin: 0;
`
export const CartDiv = styled.div`
  width: 360px;
  background-color: hsla(0, 72%, 65%, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: aliceblue;
  position: relative;
  z-index: 10;

  @media (max-width: 360px) {
    width: 275px;
  }
`
export const ImgFoto = styled.img`
  width: 80px;
  height: 80px;
  grid-row: 1 / 3;

  @media (max-width: 360px) {
    width: 92px;
    height: 107px;
  }
`
export const BtnCart = styled.button`
  background-color: antiquewhite;
  border: 0;
  color: hsla(0, 72%, 65%, 1);
  font-weight: 700;
  font-family: roboto;
  height: 24px;
  cursor: pointer;
  transition: all 0.4s;
  margin-button: 5px;
  &:hover {
    color: aliceblue;
    background-color: rgb(114, 40, 40);
  }
`
export const ListaCart = styled.li`
  padding: 8px;
  background-color: antiquewhite;
  border-radius: 5px;
  margin-bottom: 16px;
  margin-top: 5px;
  display: grid;
  grid-template-columns: auto;
`

export const ConteinerCart = styled.div`
  display: grid;
  width: 340px;
`
export const CartTexto = styled.div`
  display: flex;
  flex-direction: column;
  width: 242px;

  @media (max-width: 360px) {
    width: 117px;
  }
`
export const TextCard = styled.h4`
  margin: 6px;
  color: hsla(0, 72%, 65%, 1);
`
export const BtnLixo = styled.button`
  grid-column: 3;
  grid-row: 2;
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const TextCart2 = styled.h4`
  font-weight: 400;
  margin: 6px;
  color: hsla(0, 72%, 65%, 1);
`
export const Lixeira = styled.img`
  width: 14px;
  cursor: pointer;
`

export const Total = styled.div`
  display: flex;
  margin: 5px;
  justify-content: space-between;
`
export const BtnCartx = styled.button`
  background-color: antiquewhite;
  border: 0;
  color: hsla(0, 72%, 65%, 1);
  font-weight: 700;
  font-family: roboto;
  cursor: pointer;

  width: 20px;
  transition: all 0.4s;
  &:hover {
    color: aliceblue;
    background-color: rgb(114, 40, 40);
  }
`
