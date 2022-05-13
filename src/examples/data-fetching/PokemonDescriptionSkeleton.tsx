import React from "react";
import { Placeholder } from "react-bootstrap";

export const PokemonDescriptionSkeleton: React.FC = () => (
  <div className="mb-2">
    <Placeholder animation="glow">
      <Placeholder xs={12} />
      <Placeholder xs={12} />
      <Placeholder xs={4} />
    </Placeholder>
  </div>
);
