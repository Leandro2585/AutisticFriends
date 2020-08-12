import React from 'react';
import './style.css';

import Menu from '../../components/Menu';
import RoutesProfile from './routeProfile';
export default function Main(){

    return(
        <section className="container_profile">
          <Menu/>

          <RoutesProfile/>

        </section>
    );
}
