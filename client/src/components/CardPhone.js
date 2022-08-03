import React from "react";
import { Card, Button } from "react-bootstrap";

function CardPhone({
  name,
  manufacturer,
  description,
  color,
  image,
  processor,
  ram,
    screen,
  fun
}) {
  return (
    <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Button onClick={ fun} className='botoncito' variant="">Ver más</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPhone;
