import { use } from "react";
import axios from "axios";
import Card from "./card";

type Pokemon = {
  name: string;
  url: string;
};

const getPokedex = async (offset: number) => {
  try {
    const POKEMON_API_URL = "https://pokeapi.co/api/v2/"
    const key = `${POKEMON_API_URL}/pokemon?limit=40&offset=${offset * 10}`;
    const { results } = await axios.get(key).then((response) => response.data);
    return results as Pokemon[];
  } catch (error) {
    throw new Error();
  }
};

const Collection = () => {
  const pokedex = use(getPokedex(0));
  return (
    <section>
      <ul className="grid gap-4 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4">
        {pokedex.map((pokemon) => (
          <Card key={pokemon.name} url={pokemon.url} />
        ))}
      </ul>
    </section>
  );
};

export default Collection;
