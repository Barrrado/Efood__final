import styled from 'styled-components'

export const ItenCard = styled.div`
  width: 330px;
  height: 372px;
  border: 2px solid hsla(0, 72%, 65%, 1);
  color: aliceblue;
  background-color: hsla(0, 72%, 65%, 1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 360px) {
    width: 290px;
  }
`
export const RestContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 34px;
  max-width: 1020px;
  margin: 0 auto;
  padding: 25px;
  justify-items: center;

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, auto);
    padding: 12px;
  }
`
export const Rav = styled.img`
  object-fit: cover;
  height: 180px;
  filter: brightness(0.5);
`
export const Btnadd = styled.button`
  width: 96%;
  background-color: antiquewhite;
  border: 0;
  color: hsla(0, 72%, 65%, 1);
  font-weight: 700;
  font-family: roboto;
  margin: 5px;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    color: aliceblue;
    background-color: rgb(114, 40, 40);
  }
`

export const PCard = styled.p`
  font-size: 13px;
  margin: 0;
  font-family: roboto;
  padding: 5px;
  font-weight: 400;
  color: hsla(28, 100%, 93%, 1);
`

export const H4it = styled.h4`
  margin: 0;
  font-weight: 900;
  font-size: 16px;
  font-family: roboto;
  color: hsla(28, 100%, 93%, 1);
  padding-left: 8px;
`
export const Containercardipio = styled.div`
  display: flex;
  flex-direction: column;
`
export const ConteinerTitulo = styled.div`
  position: absolute;
  color: aliceblue;
  font-family: roboto;
  display: flex;
  flex-direction: column;
  left: 155px;
  justify-content: space-around;
  height: 179px;
  @media (max-width: 600px) {
    left: 23px;
  }
`
export const FotoPrato = styled.img`
  height: 163px;
  width: 321px;
  padding: 5px;
  @media (max-width: 360px) {
    width: 281px;
  }
`
export const H6card = styled.h6`
  font-weight: lighter;
  font-size: 20px;
  margin: 0;
`
export const H1Card = styled.h1`
  font-size: 32px;
  margin: 0;
`
