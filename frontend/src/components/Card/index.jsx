import React from 'react';
import './style.css';
export default function Card(props){
  function handleClickDelete(){
    return;
  }
  return(
    <div className="container">
      <header>
        <span>x</span>
      </header>
      <div className="description">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <footer>
        <span>{props.time}</span>
      </footer>
    </div>
  );
}
