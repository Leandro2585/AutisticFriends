import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiHome, FiPower, FiUsers, FiCalendar, FiBookmark } from 'react-icons/fi';
import { useAuth } from '../../hooks/AuthContext';
import { Container } from './style';

const Menu: React.FC = () => {
    const history = useHistory();
    const { signOut } = useAuth();

    return(
        <Container>
          <div className="logo">
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
