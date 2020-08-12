import React from 'react';
import api from '../../services/api';
import './style.css';
export default function Card(props){
  function handleClickDelete(){
    api.delete('delete/task', {
      headers: {
        id_task: props.key,
      }
    })
  }
  return(
    <div className="container">
      <header>
        <button onClick={handleClickDelete}>x</button>
      </header>
      <div className="description">
        <label>{props.key}</label>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <footer>
        {props.date ? <span>{props.date}</span> : ''}
        <span>{props.time}</span>
      </footer>
    </div>
  );
}
