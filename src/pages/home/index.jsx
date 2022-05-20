import { useTranslation } from 'react-i18next'

export default function Home() {

  const [t] = useTranslation("global");

  return (
    <div>{t("home.greetings")}</div>
  )
}
