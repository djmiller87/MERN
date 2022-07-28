import React, {useEffect, useState} from 'react';

const Pokemon = () =>{
    const [pokemon, setPokemon] = useState([])

    useEffect(()=> {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => {
            
            return response.json()
        })
        .then(response => {
            
            setPokemon(response.results)
        })
        .catch((err)=>{
            console.log(err);
        })
        
    }, []);
    
    return (
        <div style={{width: '150px'}}>
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