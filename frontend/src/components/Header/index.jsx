import React from 'react';
import { Link } from 'react-router-dom';
import { FiBell, FiPlus } from 'react-icons/fi';
import  './style.css';

export default function Header(props){
    const name = localStorage.getItem('user_name')
    if(name){
      if(name !== null && name !== undefined){
        var firstLetter = name.substr(0,1);
      }
    }
    function Button(){
      if(props.rota !== undefined){
      return(
        <button>
          <Link to={props.rota}>
          <span>
            <FiPlus size={20}/>
          </span>
          <span>
            {props.buttonTitle}
          </span>
          </Link>
        </button>
      );
    }
  }
  return(
    <header>
      <nav>
        <FiBell size={18}/>
        <div className="letter">{ firstLetter }</div>
        <span>{ name }</span>
      </nav>
      <header className="title">
      <h1>{props.title}</h1>
      { Button() }
      </header>
    </header>
  );
}
