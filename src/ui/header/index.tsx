import { Link } from "react-router-dom";
import { Button } from "../button";
import "./styles.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const handleSelectChange = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <header className="header">
      <Link to="/">
        <h2 className="header__title">{t("header.headerTitle")}</h2>
      </Link>
      <div>
        <select onChange={handleSelectChange}>
          <option>idioma</option>
          <option value="pt-BR">PT</option>
          <option value="en-US">EN</option>
        </select>
        <Link to="/criar">
          <Button typeButton="add" label={t("button.addButton")} />
        </Link>
      </div>
    </header>
  );
};

export { Header };
