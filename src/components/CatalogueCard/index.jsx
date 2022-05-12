import Card from 'react-bootstrap/Card';
import './catalogueCard.css'

export default function CatalogueCard({title, type, price, description, imgUrl}) {
  return (
    <Card >
      <Card.Img variant="top" src={`img/${imgUrl}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text as="section" >
          <p><span>Type: </span>{type}</p>
          <p><span>Description: </span>{description}</p>
          <p><span>Available: </span>1</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
