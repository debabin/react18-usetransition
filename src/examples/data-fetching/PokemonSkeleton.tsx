import React from "react";
import { Card, Placeholder } from "react-bootstrap";

export const PokemonSkeleton: React.FC = () => (
  <Card style={{ width: "18rem" }}>
    <Card.Img
      variant="top"
      width="150"
      height="300"
      src={"https://via.placeholder.com/300/fff.png"}
    />
    <Card.Body>
      <Placeholder as={Card.Title} animation="glow">
        <Placeholder xs={6} />
      </Placeholder>
      <div className="mb-2">
        <Placeholder animation="glow">
          <Placeholder xs={12} />
          <Placeholder xs={12} />
          <Placeholder xs={4} />
        </Placeholder>{" "}
      </div>
      <div className="d-flex gap-2">
        <Placeholder.Button variant="secondary" xs={3} />
        <Placeholder.Button variant="primary" xs={3} />
      </div>
    </Card.Body>
  </Card>
);
