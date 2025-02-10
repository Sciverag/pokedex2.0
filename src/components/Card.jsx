import { useEffect, useState } from "react";
import "../styles/Card.css";
import axios from "axios";

export default function Card({ pokemon }) {

    const [pokemonData, setPokemon] = useState([]);
    const [pokemonSprite, setSprite] = useState([]);
    const [pokemonAbilities, setAbilities] = useState([]);

    const getData = async () => {
        const res = await axios.get(pokemon.url);
        console.log(res.data);
        setPokemon(res.data);
        setSprite(res.data.sprites.front_default);
        setAbilities(res.data.abilities.map((ability) =>
            (ability.is_hidden) ? <li className="hidden-Card">{ability.ability.name}</li> : <li>{ability.ability.name}</li>));
    }

    

    useEffect(() => {
        getData()

    }, [])



    return (

        <div className="card-Card">
            <h1 className="pokemonName-Card">{pokemonData.id}. {pokemonData.name}</h1>
            <div className="imageContainer-Card">
                <img className="" src={pokemonSprite}></img>
            </div>
            <h1>Habilidades</h1>
            <ul className="stats-Card">
                {pokemonAbilities}
            </ul>
            <h1>Estadisticas</h1>
            <ul className="stats-Card">
                <li>Altura: {pokemonData.height}</li>
                <li>Peso: {pokemonData.weight}</li>
            </ul>
        </div>

    )
}