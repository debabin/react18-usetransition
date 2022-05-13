import React from "react";
import { Button, Card, Carousel } from "react-bootstrap";

import { Notification } from "./Notification";
import { usePokemon } from "./usePokemon";

interface PokemonProps {
  id: number;
}

export const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const [imageDirection, setImageDirection] = React.useState<"front" | "back">(
    "front"
  );
  const [pokemonId, setPokemonId] = React.useState(id);
  const [pokemon, pokemonDesc] = usePokemon(pokemonId);
  const [isPending, setTransition] = React.useTransition();

  const showNextPokemon = () => {
    // setPokemonId(pokemonId + 1);
    setTransition(() => setPokemonId(pokemonId + 1));
  };

  const showPreviousPokemon = () => {
    // setPokemonId(pokemonId - 1);
    setTransition(() => setPokemonId(pokemonId - 1));
  };

  return (
    <div className="d-flex flex-column">
      <Card style={{ width: "18rem" }}>
        <div>
          <Carousel
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
          <Card.Text>{pokemonDesc}</Card.Text>

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

      {isPending && <Notification delayMs={20} />}
    </div>
  );
};
