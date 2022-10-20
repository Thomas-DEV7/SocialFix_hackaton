import logo from '../images/LogoFinal.png'
import './Menu.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/logopronta.svg';

export const Menu = () => {
    return(
        <nav className="menu">
            <div className='siteInfos'>
                <Logo width={100}/>
                <h1 className="siteTitle">SOCIAL FIX</h1>
            </div>
            <div className="linksArea">
                <Link to="/ajuda" className="link">AJUDA</Link>
                <Link to="/sobre" className="link">SOBRE</Link>
            </div>
            
        </nav>
    )
}