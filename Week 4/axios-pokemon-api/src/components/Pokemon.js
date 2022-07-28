import React, {useEffect, useState} from 'react';
import axios from 'axios'

const Pokemon = () =>{
    const [pokemon, setPokemon] = useState([])

    useEffect(()=> {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807').then(response => { 
            setPokemon(response.data.results)
        })
        .catch((err)=>{
            console.log(err);
        })
        
    }, []);
    
    return (
        <div style={{width: '300px'}}>
            <ul>
                {pokemon.map((pkmn, index) => {
                    return (<li>{index+1}. {pkmn.name}</li>)
                })
                }
            </ul>
        </div>
    );
}
export default Pokemon;