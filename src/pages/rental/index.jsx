import { Table, Button, Offcanvas, Form, Placeholder, Card, Overlay, Popover } from "react-bootstrap";
import Title from "../../components/Title";
import { useEffect, useState } from "react";
import "./rental.css";
import SelectInput from "../../components/SelectInput";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal, openNewRental, resetTotal } from "../../redux/rental/actions";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useTranslation } from "react-i18next";


export default function Rental() {

  const [target, setTarget] = useState(null);
  const [showError, setShowError] = useState(false)

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

  const handleSubmit = (e) => {
    if ( !name || !type || !days) {
      setShowError(!showError)
      setTarget(e.target)
      return 
    }
    setShowError(false);
    setTarget(null);
    setClients({
      clientName:name,
      bikeType: type,
      rentalDays: days,
      total: formTotal.total,
      bonus: formTotal.client_bonus
    })
    setName("");
    setType("");
    setDays("");
    setShowForm(false);
    setShowPlaceholder(false);
    dispatch(resetTotal())
  }

  const initData = useSelector((state) => state.catalogue.data);
  const formTotal = useSelector((state)=> state.rental.formTotal);

  const [clients, setClients] = useLocalStorage('clients',[]);

  const {t} = useTranslation("global");

  return (
    <>
      <div className="rental_container">
        <div className="rental_header">
          <Title text={t("rental.title")} />
          <Button onClick={handleShow} className="rental_header-button">
            {t("rental.button")}
          </Button>
        </div>
        <Table striped bordered className="rental_table">
          <thead>
            <tr>
              <th>{t("rental.tableHeader.date")}</th>
              <th>{t("rental.tableHeader.client")}</th>
              <th>{t("rental.tableHeader.bikeType")}</th>
              <th>{t("rental.tableHeader.days")}</th>
              <th>{t("rental.tableHeader.total")}</th>
              <th>{t("rental.tableHeader.bonus")}</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index}>
                <td>{client.date}</td>
                <td>{client.clientName}</td>
                <td>{client.bikeType}</td>
                <td>{client.rentalDays}</td>
                <td>{client.total}$</td>
                <td>{client.bonus}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {initData && (
        <Offcanvas show={showForm && initData} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{t("rental.form.title")}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form.Group className="mb-3">
              <Form.Label>{t("rental.form.name")}</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => handleNameChange(e)}
                value={name}
              />
              <Form.Label>{t("rental.form.bikeType")}</Form.Label>
              <SelectInput
                data={initData.Bikes}
                handleChange={handleInputSelect}
                className="form_select"
                value={type}
              />
              <Form.Label>{t("rental.form.days")}</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => handleDaysChange(e)}
                value={days}
              />
              <Form.Label>
              {t("rental.form.totalCost")}
                {formTotal?.total ? (
                  <Form.Text>
                    {t("rental.form.resultText.firstDay", {count: parseInt(formTotal.base_price_max_days)})}
                    {`(${formTotal.base_price}$)`}
                    {t("rental.form.resultText.extraDay", {count: formTotal.extraDays <= 0 ? 0 : parseInt(formTotal.extraDays) })}
                    {formTotal.extraDays <= 0 ? "" : `(${formTotal.extraDaysCost}$)`}
                  </Form.Text>
                ) : (
                  <Form.Text>{t("rental.form.resultText.placeholder")}</Form.Text>
                )}
              </Form.Label>
              <Form.Control
                className="form_total"
                type="text"
                value={`${formTotal?.total ? formTotal.total : "0"}$`}
                disabled
              />
              <Button onClick={handleSubmit} className="rental_button">
                {t("rental.form.button")}
              </Button>
              <Overlay
                show={showError}
                target={target}
                placement="bottom"
                containerPadding={20}
              >
                <Popover id="popover-contained">
                  <Popover.Header as="h3">{t("rental.form.error.title")}</Popover.Header>
                  <Popover.Body>
                  {t("rental.form.error.text")}
                  </Popover.Body>
                </Popover>
              </Overlay>
            </Form.Group>
          </Offcanvas.Body>
        </Offcanvas>
      )}
      <Offcanvas show={!initData && showPlaceholder}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{t("rental.form.title")}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="ph_body">
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={12} className="ph_input" />{" "}
            <Placeholder xs={12} className="ph_input" />{" "}
            <Placeholder xs={12} className="ph_input" />{" "}
            <Placeholder xs={12} className="ph_input" />{" "}
          </Placeholder>
          <Placeholder.Button xs={12} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
