import { Form } from "react-bootstrap"
import { FilterData } from "../../utils/filterData";
import "./selectInput.css";

export default function SelectInput({ handleChange, data }) {
  return (
    <>
      <Form.Select className="input_select" onChange={(e) => handleChange(e)}>
        <option>See All</option>
        {FilterData.oneOfEachKind(data, "type").map((type, index) => (
          <option key={index}>{type}</option>
        ))}
      </Form.Select>
    </>
  );
}
