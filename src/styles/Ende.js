import styled from 'styled-components'
export const ConteinerEntrega = styled.div`
  position: absolute;
  width: 400px;
  background-color: hsla(0, 72%, 65%, 1);
  height: 100%;
  width: 360px;
  display: flex;
  flex-direction: column;
  color: aliceblue;
`

export const BtnPara = styled.button`
  background-color: antiquewhite;
  border: 0;
  color: hsla(0, 72%, 65%, 1);
  font-weight: 700;
  font-family: roboto;
  cursor: pointer;
  transition: all 0.4s;
  height: 24px;
  font-size: 14px;
  padding: 0;
  margin-top: 28px;
  &:hover {
    color: aliceblue;
    background-color: rgb(114, 40, 40);
  }
`

export const BtnVoltar = styled.button`
  background-color: antiquewhite;
  border: 0;
  color: hsla(0, 72%, 65%, 1);
  font-weight: 700;
  font-family: roboto;
  cursor: pointer;
  transition: all 0.4s;
  height: 24px;
  font-size: 14px;
  padding: 0;
  margin-top: 8px;
  &:hover {
    color: aliceblue;
    background-color: rgb(114, 40, 40);
  }
`

export const FormEntrega = styled.form`
  display: flex;
  flex-direction: column;
  color: hsla(28, 100%, 93%, 1);
`
export const FormNumber = styled.div`
  grid-column: 2;
`
export const FormCEP = styled.div`
  grid-column: 1;
`
export const ConteinerForm = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 30px;
`

export const CaixaInput = styled.input`
  height: 32px;
  background-color: hsla(28, 100%, 93%, 1);
  border: 0;
  margin-top: 10px;
  margin-bottom: 5px;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

`
export const NumberEnd = styled.input`
  height: 32px;
  background-color: hsla(28, 100%, 93%, 1);
  border: 0;
  margin-top: 10px;
  margin-bottom: 5px;
  width: 161px;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
}


`
export const CepEnd = styled.input`
  height: 32px;
  background-color: hsla(28, 100%, 93%, 1);
  border: 0;
  margin-top: 10px;
  margin-bottom: 5px;
   width: 150px;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
}



`
