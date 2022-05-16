import { Table, Button, Offcanvas, Form } from "react-bootstrap";
import Title from "../../components/Title";
import { useState } from "react";
import "./rental.css";

export default function Rental() {

  const [show, setShow] = useState(false)

  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="rental_container">
        <div className="rental_header">
          <Title text="Rental Log" />
          <Button onClick={handleShow} className="rental_header-button">
            New Rental
          </Button>
        </div>
        <Table striped bordered className="rental_table">
          <thead>
            <tr>
              <th>Date</th>
              <th>CLient</th>
              <th>Bike Type</th>
              <th>Rental Days</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>New Rental</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Client name" />
          </Form.Group>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
