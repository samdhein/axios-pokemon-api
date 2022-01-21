import React, {useState} from 'react';
import axios from 'axios';
import DisplayPokemon from './DisplayPokemon';


const FetchComponent = () => {
    const [pokemonList, setPokemonList] = useState([])

    const fetchPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response=>{
                // console.log(response.data.results)  look at data structure in console.
                setPokemonList(response.data.results)
            })
            .catch(err=>{
                console.log(err)
            })
            }
    return (
        <div>
            <button onClick = {fetchPokemon}>Fetch Pokemon</button>
            <DisplayPokemon pokemonList = {pokemonList}/>
        </div>
    )
}

export default FetchComponent