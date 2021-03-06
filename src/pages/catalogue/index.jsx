import CatalogueCard from "../../components/CatalogueCard";
import './catalogue.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCatalogueData } from "../../redux/catalogue/actions";
import Title from '../../components/Title';
import { Spinner } from 'react-bootstrap';
import { FilterData } from "../../utils/filterData";
import SelectInput from "../../components/SelectInput";
import { useTranslation } from 'react-i18next'

export default function Catalogue() {

  const dispatch = useDispatch();

  const initData = useSelector((state)=>state.catalogue.data)

  useEffect(()=>{
    if (!initData) {
      dispatch(getCatalogueData())
    }
  },[initData, dispatch])
  
  const [filteredData, setFilteredData] = useState(null)

  const handleChange = (e) => {
    const result = FilterData.selectionOnly( initData.Bikes, "type", e.target.value )
    result.length === 0 ?
    setFilteredData(initData.Bikes) :
    setFilteredData(result);
  }

  const {t} = useTranslation("global");

  return (
    <section className="catalogue__container">
      {initData ? (
        <>
          <div className="catalogue_header">
            <Title text={t("catalogue.title")} />
            <SelectInput
              handleChange={handleChange}
              data={initData.Bikes}
              className="catalogue_select"
              defaultOption="See All"
            />
          </div>
          {(filteredData ? filteredData : initData.Bikes).map((card) => (
            <CatalogueCard
              key={card.code}
              title={card.model}
              type={card.type}
              price={card.price}
              description={card.description}
              imgUrl={card.img_url}
              t={t}
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
