import React from 'react'
import { Conteiner } from '../../styles/main'

import RestaurantCard from '../Cards/RestaurantCard'
import { useGetRestaurantsQuery } from '../../service/restaurantsApi'

function Main() {
  const {
    data: restaurants,
    isLoading,
    isError,
    error
  } = useGetRestaurantsQuery()

  if (isLoading) {
    return <p>Carregando restaurantes...</p>
  }

  if (isError) {
    console.error('Detalhes do Erro na API:', error)
    return <p>Erro ao carregar restaurantes: {error}</p>
  }

  if (restaurants.length === 0) {
    return <p>Nenhum restaurante encontrado.</p>
  }

  return (
    <>
      <Conteiner>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </Conteiner>
    </>
  )
}

export default Main
