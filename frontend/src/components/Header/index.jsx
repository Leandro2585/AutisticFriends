import React from 'react';
import { Link } from 'react-router-dom';
import { FiBell, FiPlus } from 'react-icons/fi';
import  './style.css';

export default function Header(props){
    if(localStorage.getItem('user_name') !== null && localStorage.getItem('user_name') !== undefined){
      var nome = localStorage.getItem('user_name');
      var firstLetter = nome.substr(0,1);
    }
    else if(localStorage.getItem('neuro_name') !== null && localStorage.getItem('neuro_name') !== undefined){
      var nome = localStorage.getItem('neuro_name');
      var firstLetter = nome.substr(0,1);
    }
    function Button(){
      if(props.rota !== undefined && localStorage.getItem('neuro_name') !== null && localStorage.getItem('neuro_name') !== undefined){
      return(
        <button>
        <Link to={props.rota}>
        <span>
        <FiPlus size={20}/>
        </span>
        <span>{props.buttonTitle}</span>
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
        <span>{ nome }</span>
      </nav>
      <header className="title">
      <h1>{props.title}</h1>
      { Button() }
      </header>
    </header>
  );
}
