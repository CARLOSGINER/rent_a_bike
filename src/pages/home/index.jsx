import { useTranslation } from 'react-i18next'
import './home.css';

export default function Home() {

  const [t] = useTranslation("global");

  return (
    <div className="home-container">
      <p>{t("home.greetings")}</p>
    </div>
  )
}
