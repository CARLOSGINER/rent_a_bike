import { Form } from "react-bootstrap"
import { FilterData } from "../../utils/filterData";

export default function SelectInput({ handleChange, data, className, defaultOption="" }) {
  return (
    <>
      <Form.Select className={className} onChange={(e) => handleChange(e)}>
        <option>{defaultOption}</option>
        {FilterData.oneOfEachKind(data, "type").map((type, index) => (
          <option key={index}>{type}</option>
        ))}
      </Form.Select>
    </>
  );
}
