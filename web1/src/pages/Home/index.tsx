import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
export default function Home(){
    return(
        <section className="container_home">
            <nav>
                <ul>
                    <li><Link to="/logon">Logon</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>
        </section>
    );
}
