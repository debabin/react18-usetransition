import React from "react";
import { Card } from "react-bootstrap";

import { getPokemonDescriptionById } from "../../../api/api";
import { PokemonDescriptionSkeleton } from "../PokemonDescriptionSkeleton";

interface PokemonDescriptionProps {
  id: number;
}

export const PokemonDescription: React.FC<PokemonDescriptionProps> = ({
  id,
}) => {
  const [pokemonDesc, setPokemonDesc] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    getPokemonDescriptionById(id).then((getPokemonDescriptionByIdData) => {
      setPokemonDesc(getPokemonDescriptionByIdData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <PokemonDescriptionSkeleton />;

  return <Card.Text>{pokemonDesc}</Card.Text>;
};
