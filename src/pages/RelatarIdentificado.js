import arte from "../images/arte.png";
import "./RelatarIdentificado.css";
import { ReactComponent as Arte } from "../images/arte.svg";
import { Link } from "react-router-dom";
import { TbUserOff, TbUser } from "react-icons/tb";

export const RelatarIdentificado = () => {
  return (
    <div>
      <section className="content">
        <div className="optionsArea">
          <Link to="/relatar/anonimo" className="optionArea">
            <TbUserOff size={220} color="#FFF" />
            <h1 className="optionTitle">PROSSEGUIR ANONIMAMENTE</h1>
          </Link>
          <Link to="/relatar/identificado" className="optionArea">
            <TbUser size={220} color="#FFF" />
            <h1 className="optionTitle">SE IDENTIFICAR</h1>
          </Link>
        </div>
      </section>
    </div>
  );
};
