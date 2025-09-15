import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Fim from '../FinalPedido/Finalizar'
import {
  ConteinerPagamento,
  VoltarPAG,
  BtnFim,
  PagamentoH2,
  FormNumber,
  FormCEP,
  ConteinerForm,
  CaixaInput,
  FormNumeroCartão,
  FormCVV,
  Codigo,
  NumberCard,
  YearStyle,
  MonthStyle,
  FormEntrega
} from '../../styles/pag'

import { useCheckoutMutation } from '../../service/chekout'

const Pagamento = ({ onCloseCart, onClosePag }) => {
  const [nomeCartao, setNomeCartao] = useState('')
  const [numeroCartao, setNumeroCartao] = useState('')
  const [mes, setMesCartao] = useState('')
  const [ano, setAnoCartao] = useState('')
  const [codigoSeguranca, setCodigoSeguranca] = useState('')
  const [orderId, setOrderId] = useState(null)
  const [isFimOpen, setIsFimOpen] = useState(false)

  const [isCardValid, setIsCardValid] = useState(true)
  const [isCvvValid, setIsCvvValid] = useState(true)
  const [isMonthValid, setIsMonthValid] = useState(true)
  const [isYearValid, setIsYearValid] = useState(true)

  const [checkout, { isLoading }] = useCheckoutMutation()

  const itens = useSelector((state) => state.carrinho.itens)
  const delivery = useSelector((state) => state.checkout.delivery)

  const total = itens.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  )

  const OpenFim = () => setIsFimOpen(true)
  const CloseFim = () => setIsFimOpen(false)

  const validaCartao = (numero) => {
    const numeroLimpo = numero.replace(/\s/g, '')
    const regex = /^\d{13,19}$/
    return regex.test(numeroLimpo)
  }

  const validaCVV = (codigo) => {
    const regex = /^\d{3,4}$/
    return regex.test(codigo)
  }

  const validaVencimento = (mes, ano) => {
    const dataAtual = new Date()
    const anoAtual = dataAtual.getFullYear()
    const mesAtual = dataAtual.getMonth() + 1
    const anoVenc = parseInt(ano)
    const mesVenc = parseInt(mes)

    if (mesVenc < 1 || mesVenc > 12) {
      return false
    }
    if (anoVenc < anoAtual) {
      return false
    }
    if (anoVenc === anoAtual && mesVenc < mesAtual) {
      return false
    }
    return true
  }

  const handleNumeroCartaoChange = (e) => {
    const value = e.target.value
    setNumeroCartao(value)
    setIsCardValid(validaCartao(value))
  }

  const handleCvvChange = (e) => {
    const value = e.target.value
    setCodigoSeguranca(value)
    setIsCvvValid(validaCVV(value))
  }

  const handleMesChange = (e) => {
    const value = e.target.value
    setMesCartao(value)
    setIsMonthValid(validaVencimento(value, ano))
  }

  const handleAnoChange = (e) => {
    const value = e.target.value
    setAnoCartao(value)
    setIsYearValid(validaVencimento(mes, value))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const finalCardValid = validaCartao(numeroCartao)
    const finalCvvValid = validaCVV(codigoSeguranca)
    const finalDateValid = validaVencimento(mes, ano)

    setIsCardValid(finalCardValid)
    setIsCvvValid(finalCvvValid)
    setIsMonthValid(finalDateValid)
    setIsYearValid(finalDateValid)

    if (!finalCardValid || !finalCvvValid || !finalDateValid) {
      return
    }

    const fullPayload = {
      products: itens,
      delivery,
      payment: {
        card: {
          name: nomeCartao,
          number: numeroCartao,
          code: codigoSeguranca,
          expires: {
            month: Number(mes),
            year: Number(ano)
          }
        }
      }
    }

    try {
      const response = await checkout(fullPayload).unwrap()
      setOrderId(response.orderId)
      OpenFim()
    } catch (err) {
      console.error('Falha na requisição:', err)
      alert('Erro ao processar o pedido. Por favor, tente novamente.')
    }
  }

  return (
    <>
      <ConteinerPagamento>
        {isFimOpen && (
          <Fim
            onCloseFim={CloseFim}
            orderId={orderId}
            onCloseCart={onCloseCart}
          />
        )}
        <PagamentoH2>
          Pagamento : Valor a pagar R$ R${total.toFixed(2)}
        </PagamentoH2>
        <FormEntrega onSubmit={handleSubmit}>
          <label htmlFor="name">Nome no Cartão</label>
          <CaixaInput
            required
            id="name"
            type="text"
            value={nomeCartao}
            onChange={(e) => setNomeCartao(e.target.value)}
          />
          <ConteinerForm>
            <FormNumeroCartão>
              <label htmlFor="number">Numero do cartão</label>
              <NumberCard
                required
                type="text"
                id="number"
                value={numeroCartao}
                className={` ${!isCardValid ? 'error' : ''}`}
                onChange={handleNumeroCartaoChange}
              />
              {!isCardValid && (
                <p className="error-message">Número de cartão inválido.</p>
              )}
            </FormNumeroCartão>
            <FormCVV>
              <label htmlFor="code">CVV</label>
              <Codigo
                required
                type="text"
                id="code"
                className={`${!isCvvValid ? 'error' : ''}`}
                value={codigoSeguranca}
                onChange={handleCvvChange}
              />
              {!isCvvValid && <p className="error-message">CVV inválido.</p>}
            </FormCVV>
          </ConteinerForm>
          <ConteinerForm>
            <FormCEP>
              <label htmlFor="month">Mês do Vencimento</label>
              <MonthStyle
                required
                type="number"
                id="month"
                className={` ${!isMonthValid ? 'error' : ''}`}
                value={mes}
                onChange={handleMesChange}
              />
            </FormCEP>
            <FormNumber>
              <label htmlFor="year">Ano</label>
              <YearStyle
                required
                type="number"
                id="year"
                className={` ${!isYearValid ? 'error' : ''}`}
                value={ano}
                onChange={handleAnoChange}
              />
            </FormNumber>
          </ConteinerForm>
          {(!isMonthValid || !isYearValid) && (
            <p className="error-message">Data de vencimento inválida.</p>
          )}

          <BtnFim type="submit" disabled={isLoading}>
            {isLoading ? 'Finalizando...' : 'Finalizar Pedido'}
          </BtnFim>
        </FormEntrega>

        <VoltarPAG onClick={onClosePag}>
          Voltar para a Edição de Endereço{' '}
        </VoltarPAG>
      </ConteinerPagamento>
    </>
  )
}
export default Pagamento
