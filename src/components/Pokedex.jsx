import { useEffect, useState } from 'react';
import '../styles/Pokedex.css'
import axios from 'axios';
import Card from './Card';

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]); 
    const [pokemon, setPokemon] = useState(null); 
    const [pokemonName, setPokemonName] = useState("");
    const [error, setError] = useState(false);

    const getInitialData = async () => {
        try {
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
            setPokemons(res.data.results);
        } catch (error) {
            console.error("Error al obtener los Pokémon:", error);
        }
    };

    useEffect(() => {
        getInitialData();
    }, []);

    const searchPokemon = async () => {
        if (!pokemonName) {
            setPokemon(null);
            setError(false);
            return;
        }

        try {
            setError(false);
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
            setPokemon(res.data);
        } catch (err) {
            console.error("Pokémon no encontrado:", err);
            setError(true);
            setPokemon(null);
        }
    };

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Ingresa el nombre del Pokémon..."
                    value={pokemonName}
                    onChange={(e) => setPokemonName(e.target.value)}
                    className="search-bar"
                />
                <button onClick={searchPokemon} className="search-btn">Buscar</button>
            </div>

            <main className='container-Card'>
                {error ? (
                    <p>Pokémon no encontrado</p>
                ) : pokemon ? (
                    <Card key={pokemon.id} pokemon={pokemon} />
                ) : (
                    pokemons.map((element, index) => (
                        <Card key={index} pokemon={element} />
                    ))
                )}
            </main>
        </>
    );
}

export default Pokedex;
