import { Link } from 'react-router-dom';

export const About = () => {
    return (
        <div>
            Página de Sobre
            <ul>
                <li><Link to="/sobre/kaua">Kauã</Link></li>
                <li><Link to="/sobre/drar">Drar</Link></li>
            </ul>
        </div>
    )
}