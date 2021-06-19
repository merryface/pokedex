import React from 'react'

export default function Page(pokemon) {
  return (
    <div>
      <h1>{ pokemon.name }</h1>
      <img src={pokemon.sprite} />
      <p>{ pokemon.description }</p>
      <p>pokemon.weight</p>
      <div>
        {
          pokemon.types(t => (
            <p key={t}>{t}</p>
          ))
        }
      </div>
    </div>
  )
}


/*
Name: name || National number: number
image: sprites || image
Description: description
Weight: weight
Pokemon Type: map.(types.type as type => type.name)

// https://pokeapi.glitch.me/v1/pokemon/{nationalNumber}




*/
