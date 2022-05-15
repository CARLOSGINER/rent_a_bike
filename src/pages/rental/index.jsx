import { Table, Button } from "react-bootstrap";
import Title from "../../components/Title";
import "./rental.css";

export default function Rental() {
  return (
    <div className="rental_container">
      <div className='rental_header'>
        <Title text='Rental Log'/>
        <Button className='rental_header-button'>New Rental</Button>
      </div>
      <Table striped bordered className='rental_table'>
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
  );
}
