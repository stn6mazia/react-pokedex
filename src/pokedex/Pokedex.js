import { useEffect, useState } from "react";
import { PokemonThumb } from "../pokemon-thumb/PokemonThumb";
import "./Pokedex.scss";

const basePokemonUrl = 'https://pokeapi.co/api/v2/pokemon';

function Pokedex() {

    const [allPokemons, setAllPokemons] = useState([]);
    const [loadMore, setLoadMore] = useState(`${basePokemonUrl}?limit=20`);

    const getAlPokemons = async () => {
        const res = await fetch(loadMore);
        const data = await res.json();

        setLoadMore(data.next);

        function createPokemonList(result) {
            result.forEach(async (pokemon) => {
                const res = await fetch(`${basePokemonUrl}/${pokemon.name}`);
                const data = await res.json()

                setAllPokemons(currentList => [...currentList, data])
            });
        }
        createPokemonList(data.results)
        await console.log(allPokemons)
    }

    return (
        <div className="app-contaner">
            <h2>Pokedex</h2>
            <div className="pokemon-container">
                <div className="all-container">
                    {allPokemons.map((pokemonStats, index) =>
                        <PokemonThumb
                            key={index}
                            id={pokemonStats.id}
                            image={pokemonStats.sprites.other.dream_world.front_default}
                            name={pokemonStats.name}
                            type={pokemonStats.types[0].type.name}
                        />)}

                </div>
                <button className="btn btn-default-yellow" onClick={() => getAlPokemons()}>Load more</button>
            </div>
        </div>
    );
};

export default Pokedex;