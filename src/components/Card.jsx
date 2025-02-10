import { useEffect, useState } from "react";
import "../styles/Card.css";
import axios from "axios";

export default function Card({ pokemon }) {
    const [pokemonData, setPokemon] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                if (pokemon.id) {
                    setPokemon(pokemon);
                } else {
                    const res = await axios.get(pokemon.url);
                    setPokemon(res.data);
                }
            } catch (error) {
                console.error("Error al obtener datos del Pokémon:", error);
            }
        };

        getData();
    }, [pokemon]);

    if (!pokemonData) return <p>Cargando...</p>;

    return (
        <div className="card-Card">
            <h1 className="pokemonName-Card">
                {pokemonData.id}. {pokemonData.name}
            </h1>
            <div className="imageContainer-Card">
                <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
            </div>
            <h1>Habilidades</h1>
            <ul className="stats-Card">
                {pokemonData.abilities.map((ability, index) => (
                    <li key={index} className={ability.is_hidden ? "hidden-Card" : ""}>
                        {ability.ability.name}
                    </li>
                ))}
            </ul>
            <h1>Estadísticas</h1>
            <ul className="stats-Card">
                <li>Altura: {pokemonData.height}</li>
                <li>Peso: {pokemonData.weight}</li>
            </ul>
        </div>
    );
}
