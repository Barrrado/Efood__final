import React, { useState } from 'react'
import Pagamento from '../Pagamentos/Pagamento'
import { useDispatch } from 'react-redux'
import { setDelivery } from '../../store/Chekout'
import {
  CaixaInput,
  CepEnd,
  NumberEnd,
  ConteinerEntrega,
  ConteinerForm,
  FormCEP,
  FormEntrega,
  FormNumber,
  BtnPara,
  BtnVoltar
} from '../../styles/Ende'

const Endereco = ({ onCloseEnd, onCloseCart }) => {
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [cidade, setCidade] = useState('')
  const [cep, setCep] = useState('')
  const [numero, setNumero] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    OpenPag()
    const deliveryData = {
      receiver: nome,
      address: {
        description: endereco,
        city: cidade,
        zipCode: cep,
        number: parseInt(numero)
      }
    }
    dispatch(setDelivery(deliveryData))
  }

  const [isPagOpen, setIsPagOpen] = useState(false)
  const OpenPag = () => setIsPagOpen(true)

  const ClosePag = () => setIsPagOpen(false)

  return (
    <>
      <ConteinerEntrega>
        {isPagOpen && (
          <Pagamento onClosePag={ClosePag} onCloseCart={onCloseCart} />
        )}
        <h2>Entrega</h2>
        <FormEntrega onSubmit={handleSubmit}>
          <label htmlFor="">Quem Ira receber?</label>
          <CaixaInput
            required
            id="receiver"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <label htmlFor="">Endereço</label>
          <CaixaInput
            required
            id="address"
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
          <label htmlFor="">Cidade</label>
          <CaixaInput
            required
            id="city"
            type="text"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
          <ConteinerForm>
            <FormCEP>
              <label htmlFor="">CEP</label>
              <CepEnd
                required
                id="cep"
                type="number"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
            </FormCEP>
            <FormNumber>
              <label htmlFor="">Numero</label>
              <NumberEnd
                required
                id="number"
                type="number"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              />
            </FormNumber>
          </ConteinerForm>
          <BtnPara type="submit" onSubmit={OpenPag}>
            Forma de Pagamento
          </BtnPara>
        </FormEntrega>

        <BtnVoltar onClick={onCloseEnd}>Voltar ao Carrinho</BtnVoltar>
      </ConteinerEntrega>
    </>
  )
}
export default Endereco
