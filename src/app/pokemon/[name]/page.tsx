"use client";
import { useParams } from "next/navigation";
import React from "react";
import styles from "./../test.module.css";

interface PokemonDetail {
    name: string;
    height: number;
    weight: number;
    sprites: {
        front_default: string;
    };
    abilities: {
        ability: {
            name: string;
        };
    }[];
    stats: {
        base_stat: number;
        stat: {
            name: string;
        };
    }[];
    types: {
        type: {
            name: string;
        };
    }[];
}

export default function Page() {
    const params = useParams<{ name: string }>();
    const [pokemonDetail, setPokemonDetails] = React.useState<PokemonDetail | null>(null);

    React.useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
                const data: PokemonDetail = await res.json();
                setPokemonDetails(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchPokemonDetails();
    }, [params.name]);

    if (!pokemonDetail) return <p>Loading...</p>;

    return (
        <div className={styles.pokemoncontainer}>
            <h1 className={styles.pokemonname}>{pokemonDetail.name}</h1>
            <img 
                src={pokemonDetail.sprites.front_default} 
                alt={pokemonDetail.name} 
                className={styles.pokemonimage} 
            />
            <div className={styles.pokemondetailscontainer}>
                <div className={styles.pokemonleft}>
                    <div className={styles.pokemonsection}>
                        <p className={styles.pokemondetail}>Height: {pokemonDetail.height / 10} m</p>
                        <p className={styles.pokemondetail}>Weight: {pokemonDetail.weight / 10} kg</p>
                        <p className={styles.pokemonsectiontitle}>Abilities</p>
                        <ul className={styles.pokemonlist}>
                            {pokemonDetail.abilities.map((ability, index) => (
                                <li key={index} className={styles.pokemonlistitem}>{ability.ability.name}</li>
                            ))}
                        </ul>
                        <p className={styles.pokemonsectiontitle}>Types</p>
                        <ul className={styles.pokemonlist}>
                            {pokemonDetail.types.map((type, index) => (
                                <li key={index} className={styles.pokemonlistitem}>{type.type.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.pokemonright}>
                    <div className={styles.pokemonsection}>
                        <p className={styles.pokemonsectiontitle}>Stats</p>
                        <ul className={styles.pokemonlist}>
                            {pokemonDetail.stats.map((stat, index) => (
                                <li key={index} className={styles.pokemonlistitem}>{stat.stat.name}: {stat.base_stat}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
