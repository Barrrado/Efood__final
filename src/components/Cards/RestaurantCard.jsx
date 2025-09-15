import React from 'react'
import {
  ImgCard,
  Card,
  CorpoCard,
  Destaque,
  Semana,
  Estrela,
  TituloSecun,
  Pcard,
  Nota,
  BtnLink,
  Notatitulo
} from '../../styles/main'
import estrela from '../../img/estrela.png'

function RestaurantCard({ restaurant }) {
  return (
    <>
      <Card>
        <ImgCard src={restaurant.capa} alt="" />
        <CorpoCard>
          <Destaque>
            <Semana>{restaurant.tipo}</Semana>
          </Destaque>
          <TituloSecun>
            <Notatitulo>{restaurant.titulo}</Notatitulo>
            <Nota>
              <Notatitulo>{restaurant.avaliacao}</Notatitulo>
              <Estrela src={estrela} alt="Estrela" />
            </Nota>
          </TituloSecun>
          <Pcard>{restaurant.descricao}</Pcard>
          <BtnLink to={`/home/${restaurant.id}`}>Saiba Mais</BtnLink>
        </CorpoCard>
      </Card>
    </>
  )
}

export default RestaurantCard
