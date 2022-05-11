import Card from 'react-bootstrap/Card';

export default function CatalogueCard() {
  return (
    <Card >
      <Card.Img variant="top" src="img/bike_electric.jpg" />
      <Card.Body>
        <Card.Title>Bike Title</Card.Title>
        <Card.Text as="section" >
          <p>Price/day: <span>10$</span></p>
          <p>Description: <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quo consectetur iure beatae reiciendis voluptatibus. Illum incidunt saepe enim, accusantium exercitationem quos voluptatum sapiente tempore nam assumenda maiores, quod ad.</span></p>
          <p>Available:<span>3</span></p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
