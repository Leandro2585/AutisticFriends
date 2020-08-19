import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiHome, FiPower, FiUsers, FiCalendar, FiBookmark } from 'react-icons/fi';
import './style.css';
export default function Menu(){

    const history = useHistory();

    function handleLogout(e){
      e.preventDefault();
      localStorage.clear();
      history.push('/');
    }


    return(
        <aside className="container_menu">
          <div className="logo">
          </div>
          <nav>
            <Link to="/profile/dashboard">Dashboard<FiHome size={18}/></Link>
            <Link to="/profile/queries">Queries<FiBookmark size={18}/></Link>
            <Link to="/profile/tasks">Tasks<FiCalendar size={18}/></Link>
            <Link to="/profile/users">Users<FiUsers size={18}/></Link>

            <a onClick={handleLogout}>Logout<FiPower size={18}/></a>
          </nav>
        </aside>

    );
}
