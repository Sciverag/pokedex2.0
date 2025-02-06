import { useEffect, useState } from "react";
import "../styles/Card.css";
import axios from "axios";

export default function Card({ pokemon }) {

    const [pokemonData, setPokemon] = useState([]);
    const [pokemonSprite, setSprite] = useState([]);
    const pokemonAbilities = document.createElement("ul");

    const getData = async () => {
        const res = await axios.get(pokemon.url);
        console.log(res.data);
        setPokemon(res.data);
        setSprite(res.data.sprites.front_default);
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
            <div className="stats-Card">
                
            </div>
        </div>

    )
}