import React, { useEffect, useState } from 'react'

const Onload = () => {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((json) => setPokemon(json))
  }, [])

  console.log(pokemon)
  if (pokemon && pokemon.results)
    return (
      <p>
        {pokemon.results.map((poke) => (
          <p>{poke.name}</p>
        ))}
      </p>
    )
  return <p>{'s'}</p>
}

export default Onload
