import CatalogueCard from "../../components/CatalogueCard";
import './catalogue.css';

export default function Catalogue() {
  return (
    <section className="catalogue__container">
      <CatalogueCard />
      <CatalogueCard />
      <CatalogueCard />
    </section>
  )
}
