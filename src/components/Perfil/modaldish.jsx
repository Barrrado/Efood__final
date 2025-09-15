import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adicionarAoCarrinho } from '../../store/cart'
import {
  Modalfundo,
  Modal,
  ConteudoModal,
  CardP,
  CardP2,
  H2cardmodal,
  Btnadd,
  Btnfechar,
  Fotomodal,
  MensagemAdicionado
} from '../../styles/Modal'

function DishDetailsModal({ dish, onClose }) {
  const dispatch = useDispatch()
  const [mensagem, setMensagem] = useState('')

  if (!dish) {
    return null
  }

  const { nome, preco, descricao, foto, porcao } = dish

  const handleModalClick = (e) => {
    e.stopPropagation()
  }

  const AdicionarAoCarrinho = () => {
    dispatch(adicionarAoCarrinho(dish))
    setMensagem('Adicionado ao carrinho!')
    setTimeout(() => {
      setMensagem('')
    }, 2000)
  }

  return (
    <>
      <Modalfundo onClick={onClose}>
        <Modal onClick={handleModalClick}>
          <Fotomodal src={foto} alt={nome} />

          <ConteudoModal>
            <Btnfechar onClick={onClose} aria-label="Fechar modal">
              &times;
            </Btnfechar>
            <H2cardmodal>{nome}</H2cardmodal>
            <CardP>{descricao}</CardP>
            <CardP2> Porção: {porcao}</CardP2>

            <Btnadd onClick={AdicionarAoCarrinho}>
              Adicionar ao carrinho - R$ {preco.toFixed(2)}
            </Btnadd>
            {mensagem && <MensagemAdicionado>{mensagem}</MensagemAdicionado>}
          </ConteudoModal>
        </Modal>
      </Modalfundo>
    </>
  )
}

export default DishDetailsModal
