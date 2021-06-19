import React from 'react'

function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map(p => (
        <div className="text-cyan-600 text-xl" key={p}>{p}</div>
      ))}
    </div>
  )
}

export default PokemonList
