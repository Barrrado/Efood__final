import React from 'react'
import logofooter from '../../img/logo.png'
import insta from '../../img/instagram.png'
import git from '../../img/github.png'
import face from '../../img/facebook.png'
import {
  FooterConteiner,
  LogoFooter,
  TextFooter,
  Redes,
  RedesConteiner
} from '../../styles/footer'

function Footer() {
  return (
    <>
      <FooterConteiner>
        <LogoFooter src={logofooter} alt="Logo" />
        <RedesConteiner>
          <a href="https://github.com/Barrrado" target="_blank">
            <Redes src={git} alt="Git" />{' '}
          </a>
          <Redes src={face} alt="Face" />
          <Redes src={insta} alt="Insta" />
        </RedesConteiner>

        <TextFooter>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </TextFooter>
      </FooterConteiner>
    </>
  )
}
export default Footer
