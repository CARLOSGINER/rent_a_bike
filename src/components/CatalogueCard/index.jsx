import Card from 'react-bootstrap/Card';
import './catalogueCard.css'

export default function CatalogueCard({title, type, description, imgUrl, t}) {
  return (
    <Card >
      <Card.Img variant="top" src={`img/${imgUrl}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text as="section" >
          <p><span>{t("catalogue.type")} </span>{type}</p>
          <p><span>{t("catalogue.description")}</span>{description}</p>
          <p><span>{t("catalogue.available")}</span>1</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
