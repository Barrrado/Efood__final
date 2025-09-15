import { useDispatch } from 'react-redux'
import { clearCart } from '../../store/cart'
import { resetCheckout } from '../../store/Chekout'
import { ParagFim, H2Fim, ConteinerFim, Btn } from '../../styles/fim'

const FinalPedido = ({ onCloseCart, orderId }) => {
  const dispatch = useDispatch()

  const Concluir = () => {
    dispatch(clearCart())
    dispatch(resetCheckout())
    onCloseCart()
  }

  return (
    <>
      <ConteinerFim>
        {orderId && <H2Fim>Pedido Realizado - {orderId}</H2Fim>}
        <div>
          <ParagFim>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </ParagFim>
          <ParagFim>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </ParagFim>
          <ParagFim>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </ParagFim>
          <ParagFim>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </ParagFim>
        </div>

        <Btn onClick={Concluir}>Concluir</Btn>
      </ConteinerFim>
    </>
  )
}
export default FinalPedido
