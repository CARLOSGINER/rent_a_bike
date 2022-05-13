import CatalogueCard from "../../components/CatalogueCard";
import './catalogue.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCatalogueData } from "../../redux/catalogue/actions";
import Title from '../../components/Title';
export default function Catalogue() {

  const dispatch = useDispatch();
  const data = useSelector((state)=>state.catalogue.data)

  useEffect(()=>{
    dispatch(getCatalogueData())  
  },[dispatch])

  return (
    <section className="catalogue__container">
      {data ?
      <>
        <Title text="Bikes Catalogue"/> 
        {data.Bikes.map(card => (
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
      : <p>loading...</p>}
    </section>
  )
}
