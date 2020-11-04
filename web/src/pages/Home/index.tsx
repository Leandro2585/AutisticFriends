import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './style';

const Home: React.FC = () => {
    return(
        <Container>
            <nav>
                <ul>
                    <li><Link to="/logon">Logon</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>
        </Container>
    );
}

export default Home;