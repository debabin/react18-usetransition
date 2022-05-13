import React from "react";
import { Button, Card, Carousel } from "react-bootstrap";

import { getPokemonById } from "../../../api/api";
import { PokemonDescription } from "./PokemonDescription";
import { PokemonSkeleton } from "../PokemonSkeleton";

interface Pokemon {
  name: string;
  images: string[];
  id: number;
}

interface PokemonProps {
  id: number;
}

export const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const [pokemon, setPokemon] = React.useState<Pokemon | null>(null);
  const [pokemonId, setPokemonId] = React.useState(id);
  const [isLoading, setIsLoading] = React.useState(true);

  const showNextPokemon = () => {
    setPokemonId(pokemonId + 1);
  };

  const showPreviousPokemon = () => {
    setPokemonId(pokemonId - 1);
  };

  React.useEffect(() => {
    setIsLoading(true);

    getPokemonById(pokemonId).then((getPokemonByIdData) => {
      setPokemon(getPokemonByIdData);
      setIsLoading(false);
    });
  }, [pokemonId]);

  if (!pokemon || isLoading) return <PokemonSkeleton />;

  return (
    <Card style={{ width: "18rem" }}>
      <div>
        <Carousel
          activeIndex={1}
          variant="dark"
          style={{ width: "100%", height: "300px" }}
          interval={null}
        >
          {pokemon.images.map((image: string) => (
            <Carousel.Item key={image}>
              <img
                className="d-block w-100 h-300"
                src={image}
                alt="Third slide"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <PokemonDescription id={pokemonId} />
        <div className="d-flex gap-2">
          {pokemon.id > 1 && (
            <Button variant="secondary" onClick={showPreviousPokemon}>
              back
            </Button>
          )}
          <Button onClick={showNextPokemon}>next</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
