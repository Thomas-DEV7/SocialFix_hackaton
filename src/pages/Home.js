import arte from "../images/arte.png";
import "./Home.css";
import { ReactComponent as Arte } from "../images/arte.svg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <section className="mainSection">
        <img src={arte} alt="Arte" width={500} />
        <div className="containerItems">
          <p className="title">ALGUM PROBLEMA NA CIDADE?</p>
          <p className="subTitle">Você tem seus direitos como morador!</p>
          <Link to="/relatar" className="buttonArea">
            <p class="buttonText">RELATAR PROBLEMA</p>
          </Link>
        </div>
      </section>
      <section className="cardsArea">
        <div className="cardArea">
          <h1 className="cardTitle">Como fazer uma denúncia?</h1>
          <p className="cardText">
            Prencha os campos, contendo: nome, celular, email, endereço(rua,
            bairro, numero).
          </p>
        </div>
        <div className="cardArea">
          <h1 className="cardTitle">Pode fazer quais denúncias?</h1>
          <p className="cardText">
            Todas que sejam de cunho municipal, e assim, a prefeitura será
            notificada e terá ciência do problema por via morador.
          </p>
        </div>
        <div className="cardArea">
          <h1 className="cardTitle">Sobre</h1>
          <p className="cardText">
            Visando problemas impostos em nossa sociedade, o Social Fix é criado
            para ajudar a populção a relatar problemas de cunho municipal,
            intermediando, o morador aos ouvidos da gestão municipal.
          </p>
        </div>
      </section>
    </div>
  );
};
