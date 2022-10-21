import arte from "../images/arte.png";
import "./Relatar.css";
import { ReactComponent as Arte } from "../images/arte.svg";
import { Link } from "react-router-dom";
import { TbUserOff, TbUser } from "react-icons/tb";

export const Relatar = () => {
  return (
    <div>
      <section className="content">
        <h1 className="title">
          Selecione a forma que deseja relatar o problema.
        </h1>
        <div className="optionsArea">
          <Link to="/relatar/anonimo" className="optionArea">
            <TbUserOff size={220} color="#FFF" />
            <h1 className="optionTitle">ANONIMAMENTE</h1>
          </Link>
          <Link to="/relatar/identificado" className="optionArea">
            <TbUser size={220} color="#FFF" />
            <h1 className="optionTitle">SE IDENTIFICANDO</h1>
          </Link>
        </div>
        <Link to="/" className="buttonArea">
          <p className="buttonText">VOLTAR</p>
        </Link>
      </section>
    </div>
  );
};
