import logo from '../images/logopronta.png'
import brasao from '../images/brasaomongagua.png'
import './Footer.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/logopronta.svg';

export const Footer = () => {
    return(
        <div className="footer">
            <div className='iconsArea'>
                <img src={logo} alt="Logo" height={100} className="icon"/>
                <img src={brasao} alt="Brasão de Mongaguá" height={100} className="icon"/>
            </div>
            <p className="text">Copyright @ 2022 - Todos os Direitos Reservados - Social Fix</p>
            
        </div>
    )
}