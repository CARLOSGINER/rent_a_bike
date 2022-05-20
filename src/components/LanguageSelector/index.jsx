import './languageSelector.css';
import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
    const {i18n}  = useTranslation("global");


  return (
    <div className="languageSelector-container">
      <button className="languageSelector-button" onClick={()=> i18n.changeLanguage("es")}>ES</button>
      <span className="languageSelector-separator">|</span>
      <button className="languageSelector-button" onClick={()=> i18n.changeLanguage("en")}>EN</button>
    </div>
  );
}
