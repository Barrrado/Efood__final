import styled from 'styled-components'

export const ConteinerPagamento = styled.div`
  position: absolute;
  width: 100%;
  background-color: hsla(0, 72%, 65%, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  color: aliceblue;
`

export const VoltarPAG = styled.button`
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
  margin-top: 8px;
  padding: 0;
`
export const BtnFim = styled.button`
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
  margin-top: 28px;
  padding: 0;
`
export const PagamentoH2 = styled.h2`
  font-size: 16px;
  line-height: 100%;
  color: hsla(28, 100%, 93%, 1);
  letter-spacing: 1px;
`
export const FormNumber = styled.div`
  grid-column: 2;
`
export const FormCEP = styled.div`
  grid-column: 1;
  width: 163px;
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
export const FormNumeroCartão = styled.div`
  grid-column: 1;
  width: 212px;
`
export const FormCVV = styled.div`
  grid-column: 2;
  width: 66px;
`
export const Codigo = styled.input`
  height: 32px;
  background-color: hsla(28, 100%, 93%, 1);
  border: 0;
  margin-top: 10px;
  margin-bottom: 5px;
  width: 87px;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

`
export const NumberCard = styled.input`
  height: 32px;
  background-color: hsla(28, 100%, 93%, 1);
  border: 0;
  margin-top: 10px;
  margin-bottom: 5px;
    width: 228px;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

`
export const YearStyle = styled.input`
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
export const MonthStyle = styled.input`
  height: 32px;
  background-color: hsla(28, 100%, 93%, 1);
  border: 0;
  margin-top: 10px;
  margin-bottom: 5px;
   width: 155px;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
`
export const FormEntrega = styled.form`
  display: flex;
  flex-direction: column;
  color: hsla(28, 100%, 93%, 1);
`
