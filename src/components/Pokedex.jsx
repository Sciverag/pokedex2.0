import { useEffect, useState } from 'react';
import '../styles/Pokedex.css'
import axios from 'axios';
import Card from './Card';

const Pokedex = () => {

    const [pokemons, setPokemons] = useState([]);
    const [pokemonsData, setPokemonData] = useState([]);

    const getData = async () => {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon");
        setPokemons(res.data.results);
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <input type="text" />
            <main className='container-Card'>
                {pokemons.map((element, index) =>
                    <Card key={index} pokemon={element} />
                )}
            </main>
        </>
    );
}

export default Pokedex;