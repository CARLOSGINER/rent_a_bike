import CatalogueCard from "../../components/CatalogueCard";
import './catalogue.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCatalogueData } from "../../redux/catalogue/actions";
import Title from '../../components/Title';
import {Form, Spinner} from 'react-bootstrap';
import { FilterData } from "../../utils/filterData";

export default function Catalogue() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCatalogueData())
  },[dispatch])

  const initData = useSelector((state)=>state.catalogue.data)
  
  const [filteredData, setFilteredData] = useState(null)

  const handleChange = (e) => {
    const result = FilterData.selectionOnly( initData.Bikes, "type", e.target.value )
    result.length === 0 ?
    setFilteredData(initData.Bikes) :
    setFilteredData(result);
  }

  return (
    <section className="catalogue__container">
      {initData ? (
        <>
          <div className="catalogue_header">
            <Title text="Bikes Catalogue" />
            <Form.Select className="input_select" onChange={(e) => handleChange(e)}>
              <option>See All</option>
              {FilterData.oneOfEachKind(initData.Bikes, "type").map((type,index) => (
                <option key={index}>{type}</option>
              ))}
            </Form.Select>
          </div>
          {(filteredData ? filteredData : initData.Bikes).map((card) => (
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
        <div className="spinner_container">
          <Spinner animation="border" className="spinner"/>
        </div>
      )}
    </section>
  );
}
