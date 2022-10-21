import logo from '../images/LogoFinal.png'
import './Menu.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/logopronta.svg';

export const Menu = () => {
    return(
        <nav className="menu">
            <div className='siteInfos'>
                <Link to="/"><Logo width={120}/></Link>
                <Link to="/" className="siteTitle">SOCIAL FIX</Link>
            </div>
            <div className="linksArea">
                <Link to="/ajuda" className="link">AJUDA</Link>
                <Link to="/sobre" className="link">SOBRE</Link>
            </div>
            
        </nav>
    )
}