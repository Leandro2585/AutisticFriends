import React from 'react';
import { useAuth } from '../../hooks/AuthContext';
import { Link } from 'react-router-dom';
import { FiBell, FiPlus } from 'react-icons/fi';
import { Container } from './style';

interface HeaderProps {
  rota?: string;
  title?: string;
  buttonTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ rota, title, buttonTitle }) => {
    const { user } = useAuth();
    function Button(){
      if(rota && buttonTitle){
        return(
          <button>
            <Link to={rota || '/'}>
              <span>
                <FiPlus size={20}/>
              </span>
              <span>
              {buttonTitle}
              </span>
            </Link>
          </button>
        );
      }
    }
    const { name } = user;
  return(
    <Container>
      <nav>
        <FiBell size={18}/>
        <div className="letter">{ name.substr(0,1) }</div>
        <span>{ name }</span>
      </nav>
      <header className="title">
      <h1>{title}</h1>
      { Button() }
      </header>
    </Container>
  );
}

export default Header;
