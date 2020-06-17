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
    function renderPrivateRoutes(){
      var neuro_id = localStorage.getItem('neuro_id');
      if(neuro_id !== undefined && neuro_id !== null){
        return(
          <Link to="/Profile/Users">Users<FiUsers size={18}/></Link>
        );
      }
      else{
        return false;
      }
    }
    return(
        <aside className="container_menu">
          <div className="logo">
          </div>
          <nav>
            <Link to="/Profile">Dashboard<FiHome size={18}/></Link>
            <Link to="/Profile/Queries">Queries<FiBookmark size={18}/></Link>
            <Link to="/Profile/Tasks">Tasks<FiCalendar size={18}/></Link>
            {
              renderPrivateRoutes()
            }
            <a onClick={handleLogout}>Logout<FiPower size={18}/></a>
          </nav>
        </aside>

    );
}
