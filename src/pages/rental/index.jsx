import { Table, Button, Offcanvas, Form } from "react-bootstrap";
import Title from "../../components/Title";
import { useState } from "react";
import "./rental.css";
import SelectInput from "../../components/SelectInput";
import { useDispatch, useSelector } from "react-redux";
import { getCatalogueData } from "../../redux/catalogue/actions";

export default function Rental() {

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [days, setDays] = useState(0)

  const handleInputSelect = (e) => {
    setType(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDaysChange =(e)=> {
    setDays(e.target.value);
  }
  const handleClose = () => setShow(false);

  const handleShow = () => {
    dispatch(getCatalogueData());
    setShow(true);
  };

  const initData = useSelector((state) => state.catalogue.data);

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
      {initData && (
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>New Rental</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" onChange={(e)=>handleNameChange(e)} value={name}/>
              <Form.Label>Bike Type</Form.Label>
              <SelectInput
                data={initData.Bikes}
                handleChange={handleInputSelect}
                className="form_select"
              />
              <Form.Label>Days</Form.Label>
              <Form.Control type="text"  onChange={(e)=>handleDaysChange(e)} value={days}/>
              <Form.Label>Total Cost:</Form.Label>
              <Form.Control className="form_total" type="text"  value={'10$'} disabled/>
            </Form.Group>
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </>
  );
}
