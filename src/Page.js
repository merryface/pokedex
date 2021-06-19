import React from 'react'
import Name from './components/Name';
import Image from './components/Image';
import Description from './components/Description';
import Weight from './components/Weight';

export default function Page(pokemon) {
  return (
    <div>
      <Name name={ pokemon.name }/>
      <Image sprite={ pokemon.sprite }/>
      <Description description={ pokemon.description }/>
      <Weight weight={ pokemon.weight } />
      <Types types={ pokemon.types }/>
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
