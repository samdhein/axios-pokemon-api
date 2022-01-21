import React, { useState } from 'react';

const DisplayPokemon = (props) => {
    const {pokemonList} = props
    return (
        <div>
            <ul>
            {pokemonList.length > 0 && pokemonList.map((pokemon, index)=>{
                return (<li key={index}>{pokemon.name}</li>)
            })}
            </ul>
        </div>
    )
}

export default DisplayPokemon