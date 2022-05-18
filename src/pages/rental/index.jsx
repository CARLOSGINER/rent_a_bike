import { Table, Button, Offcanvas, Form, Placeholder, Card } from "react-bootstrap";
import Title from "../../components/Title";
import { useEffect, useState } from "react";
import "./rental.css";
import SelectInput from "../../components/SelectInput";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal, openNewRental } from "../../redux/rental/actions";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function Rental() {

  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [days, setDays] = useState("")

  const handleInputSelect = (e) => {
    setType(e.target.value);
  };

  useEffect(()=>{
    if(type && days) {
      dispatch(calculateTotal({ type, days }))
    }
  },[type, days, dispatch])

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDaysChange =(e)=> {
    const daysEntered = e.target.value
    if (daysEntered >= 1 ) {
      setDays(daysEntered);
    } else {
      setDays("");
    }
  }
  const handleClose = () => {
    setShowPlaceholder(false);
    setShowForm(false)
  };

  const handleShow = () => {
    setShowPlaceholder(true);
    setShowForm(true);
    dispatch(openNewRental());
  };

  const handleSubmit = () => {
    setShowForm(false);
    setShowPlaceholder(false);
    setClients({
      clientName:name,
      bikeType: type,
      rentalDays: days,
      total: formTotal.total
    })
  }

  const initData = useSelector((state) => state.catalogue.data);
  const formTotal = useSelector((state)=> state.rental.formTotal);

  const [clients, setClients] = useLocalStorage('clients',[]);

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
              <th>Total</th>
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
      {initData &&
          <Offcanvas show={showForm && initData} onHide={handleClose}>
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
                value={type}
              />
              <Form.Label>Days</Form.Label>
              <Form.Control type="text"  onChange={(e)=>handleDaysChange(e)} value={days}/>
              <Form.Label>
                Total Cost:
                {formTotal ? 
                  <Form.Text>
                    {`First ${formTotal.base_price_max_days} days (${formTotal.base_price}$) 
                    + Extra ${formTotal.extraDays <= 0 ? "0" : formTotal.extraDays} days (${formTotal.extraDaysCost}$)`}
                  </Form.Text>
                : <Form.Text>Fill form to calculate totals...</Form.Text> 
                } 

              </Form.Label>
              <Form.Control className="form_total" type="text"  value={`${formTotal ? formTotal.total : '0'}$`} disabled/>
              <Button onClick={handleSubmit} className="rental_button">Submit</Button>
            </Form.Group>
          </Offcanvas.Body>
        </Offcanvas>
      }
      <Offcanvas show={!initData && showPlaceholder}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>New Rental</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='ph_body'>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={12} className='ph_input'/> {" "}
            <Placeholder xs={12} className='ph_input'/> {" "}
            <Placeholder xs={12} className='ph_input'/> {" "}
            <Placeholder xs={12} className='ph_input'/> {" "}
          </Placeholder>
          <Placeholder.Button  xs={12} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
