import styled from 'styled-components'

export const ParagFim = styled.p`
  line-height: 22px;
  font-size: 14px;
  font-weight: 400;
  font-family: Roboto;
  margin-bottom: 24px;
  color: hsla(28, 100%, 93%, 1);
`

export const H2Fim = styled.h2`
  line-height: 100%;
  font-size: 16px;
  font-weight: 700;
  font-family: Roboto;
  margin-bottom: 24px;
  color: hsla(28, 100%, 93%, 1);
`
export const ConteinerFim = styled.div`
  position: absolute;
  width: 400px;
  background-color: hsla(0, 72%, 65%, 1);
  height: 100%;
  width: 360px;
  display: flex;
  flex-direction: column;
  color: aliceblue;
`
export const Btn = styled.button`
  background-color: antiquewhite;
  border: 0;
  color: hsla(0, 72%, 65%, 1);
  font-weight: 700;
  font-family: roboto;
  cursor: pointer;
  transition: all 0.4s;
  height: 28px;
  font-size: 14px;
  &:hover {
    color: aliceblue;
    background-color: rgb(114, 40, 40);
  }
`
