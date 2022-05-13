import CatalogueCard from "../../components/CatalogueCard";
import './catalogue.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCatalogueData } from "../../redux/catalogue/actions";
import Title from '../../components/Title';
import {Form} from 'react-bootstrap';
import { FilterData } from "../../utils/filterData";

export default function Catalogue() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCatalogueData())
  },[dispatch])

  const initData = useSelector((state)=>state.catalogue.data)

  const { Bikes } = initData;

  const [filteredData, setFilteredData] = useState(Bikes)

  const handleChange = (e) => {
    const result = FilterData.selectionOnly( Bikes, "type", e.target.value )
    result.length === 0 ?
    setFilteredData(Bikes) :
    setFilteredData(result);
  }

  return (
    <section className="catalogue__container">
      {filteredData ? (
        <>
          <div className="catalogue_header">
            <Title text="Bikes Catalogue" />
            <Form.Select onChange={(e) => handleChange(e)}>
              <option>See All</option>
              {FilterData.oneOfEachKind(Bikes, "type").map(type => (
                <option>{type}</option>
              ))}
            </Form.Select>
          </div>
          {filteredData.map((card) => (
            <CatalogueCard
              key={card.code}
              title={card.model}
              type={card.type}
              price={card.price}
              description={card.description}
              imgUrl={card.img_url}
            />
          ))}
        </>
      ) : (
        <p>loading...</p>
      )}
    </section>
  );
}
