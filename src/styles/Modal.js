import styled from 'styled-components'

export const Modal = styled.div`
  background-color: hsla(0, 72%, 65%, 1);
  height: 344px;
  width: 1024px;
  position: fixed;
  top: 30vh;
  left: 15vw;
  display: flex;

  @media (max-width: 600px) {
    height: auto;
    width: 269px;
    position: fixed;
    top: 2vh;
    left: 25px;
    flex-direction: column;
  }
`
export const Modalfundo = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: hsla(0, 0%, 0%, 0.8);
  position: fixed;
`
export const ConteudoModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
  @media (max-width: 600px) {
    padding: 10px;
    height: auto;
    width: 252px;
  }
`
export const Fotomodal = styled.img`
  width: 280px;
  height: 280px;
  padding: 32px;
  object-fit: cover;

  @media (max-width: 600px) {
    width: auto;
    height: 155px;
    padding: 7px;
  }
`
export const Btnfechar = styled.button`
  background-color: transparent;
  border: 0;
  font-size: 30px;
  color: aliceblue;
  font-weight: lighter;
  align-self: flex-end;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    color: rgb(0, 0, 0);
  }
  @media (max-width: 600px) {
    display: none;
  }
`
export const CardP = styled.p`
  line-height: 22px;
  font-size: 14px;
  font-weight: 400;
  height: 90px;
  font-family: roboto;
  text-align: left;
  padding-bottom: 24px;
  margin: 0;
  width: 613px;
  padding-right: 58px;
  color: hsla(0, 0%, 100%, 1);

  @media (max-width: 600px) {
    width: auto;
    padding: 0px;
    height: auto;
  }
`
export const CardP2 = styled.p`
  line-height: 22px;
  font-size: 14px;
  font-weight: 400;
  padding-bottom: 20px;
  font-family: roboto;
  margin: 0;
  color: hsla(0, 0%, 100%, 1);
`
export const H2cardmodal = styled.h2`
  padding: 0;
  line-height: 18px;
  font-weight: 900;
  font-family: roboto;
  color: hsla(0, 0%, 100%, 1);

  @media (max-width: 600px) {
    line-height: 27px;
  }
`
export const Btnadd = styled.button`
  background-color: antiquewhite;
  border: 0;
  color: hsla(0, 72%, 65%, 1);
  font-weight: 700;
  font-family: roboto;
  height: 24px;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    color: aliceblue;
    background-color: rgb(114, 40, 40);
  }
`
export const MensagemAdicionado = styled.p`
  color: hsla(0, 72%, 65%, 1);
  text-align: center;
  margin-top: 16px;
  font-weight: bold;
  background-color: antiquewhite;
  border-radius: 5px;
  padding: 10px;
`
