import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiHome, FiPower, FiCalendar, FiBookmark } from 'react-icons/fi';
import logoA2 from '../../assets/logo.svg';
import { useAuth } from '../../hooks/AuthContext';
import { Container } from './style';

const Menu: React.FC = () => {
    const history = useHistory();
    const { signOut } = useAuth();

    return(
        <Container>
          <div className="logo">
            <img src={logoA2}/>
          </div>
          <nav>
            <Link to="/dashboard">Dashboard<FiHome size={18}/></Link>
            <Link to="/querie">Queries<FiBookmark size={18}/></Link>
            <Link to="/task">Tasks<FiCalendar size={18}/></Link>

            <a onClick={signOut}>Logout<FiPower size={18}/></a>
          </nav>
        </Container>

    );
}

export default Menu;
