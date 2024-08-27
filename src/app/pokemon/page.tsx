"use client";
import Link from "next/link";
import React from "react";

interface PokemonList {
  count: number;
  next: string;
  previous?: any;
  results: Pokemon[];
}

interface Pokemon {
  name: string;
  url: string;
}

export default function Page() {
  const [pokemonData, setPokemonData] = React.useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data: PokemonList = await res.json();
        setPokemonData(data.results);
        setNextUrl(data.next);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    getData();
  }, []);

  const loadMorePokemon = async () => {
    if (nextUrl) {
      setLoading(true);
      try {
        const res = await fetch(nextUrl);
        const data: PokemonList = await res.json();
        setPokemonData((prev) => [...prev, ...data.results]);
        setNextUrl(data.next);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }
  };

  const DisplayPokemonList = () => {
    if (pokemonData.length > 0) {
      return (
        <ul>
          {pokemonData.map((p) => (
            <li key={p.name}>
              <Link href={`/pokemon/${p.name}`}>{p.name}</Link>
            </li>
          ))}
        </ul>
      );
    } else {
      return <p>Loading...</p>;
    }
  };

  return (
    <>
      <h1>Pokemon</h1>
      <DisplayPokemonList />
      {nextUrl && !loading && (
        <button onClick={loadMorePokemon}>Load More</button>
      )}
      {loading && <p>Loading more Pokémon...</p>}
    </>
  );
}