import Image from "next/image";
import axios from "axios";
import { use } from "react";
import colors from "../../../constants/colors";
import Type from "../../elements/type";
import type { Color } from "../../../types";

type Pokemon = {
  id: number;
  name: string;
  image: string;
  types: {
    slot: number;
    type: {
      name: Color;
      url: string;
    };
  }[];
};

const getPokemon = async (url: string): Promise<Pokemon> => {
  try {
    const { id, name, types } = await axios
      .get(url)
      .then((response) => response.data);
    const POKEMON_IMAGE_URL = process.env.POKEMON_IMAGE_URL!;
    const imageUrl = `${POKEMON_IMAGE_URL}/${name[0].toUpperCase()}${name.slice(
      1
    )}`;
    const image = await axios
      .get(imageUrl)
      .then(() => imageUrl)
      .catch(() => "/images/unknown.gif");
    return { id, name, image, types };
  } catch (error) {
    throw new Error();
  }
};

type Props = {
  url: string;
};

const Card = ({ url }: Props) => {
  const pokemon = use(getPokemon(url));

  return (
    <li className="rounded-primary bg-white p-4 shadow">
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="relative h-12 w-12 flex-none saturate-150">
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            fill
            sizes="(max-width: 100px)"
            className="object-contain"
          />
        </div>
        {/* Details */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="font-bold capitalize">{pokemon.name}</h3>
            <span className="text-sm opacity-fade">#{pokemon.id}</span>
          </div>
          {/* Types */}
          <div className="flex gap-1">
            {pokemon.types.map(({ type }) => (
              <Type
                key={type.name}
                name={type.name}
                background={colors.type[type.name]}
                icon={`/icons/types/${type.name}.svg`}
              />
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
