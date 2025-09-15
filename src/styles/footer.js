import styled from 'styled-components'
export const FooterConteiner = styled.div`
  display: flex;
  flex-direction: column;
  height: 298px;
  background-color: hsl(29deg 80.67% 81.19%);
  align-items: center;
  justify-content: space-evenly;
`

export const LogoFooter = styled.img`
  width: 125px;
`
export const TextFooter = styled.h2`
  font-family: Roboto;
  color: hsla(0, 72%, 65%, 1);
  font-size: 10px;
  font-weight: 400;
  line-height: 100%;
  text-align: center;
  width: 480px;
  margin: 5px;

  @media (max-width: 360px) {
    width: auto;
  }
`

export const RedesConteiner = styled.div`
  display: flex;
  flex-direction: row;
`
export const Redes = styled.img`
  width: 24px;
  padding: 8px;
`
