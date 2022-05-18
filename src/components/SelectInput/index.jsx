import { Form } from "react-bootstrap"
import { FilterData } from "../../utils/filterData";

export default function SelectInput({ handleChange,value, data, className, defaultOption="" }) {
  return (
    <>
      <Form.Select value={value} className={className} onChange={(e) => handleChange(e)}>
        <option>{defaultOption}</option>
        {FilterData.oneOfEachKind(data, "type").map((type, index) => (
          <option key={index}>{type}</option>
        ))}
      </Form.Select>
    </>
  );
}
