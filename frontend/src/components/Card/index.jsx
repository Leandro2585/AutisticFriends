import React from 'react';
import api from '../../services/api';
import './style.css';
export default function Card(props){

  return(
    <li key={props.id}>
      <strong>Título:</strong>
      <p>{props.title}</p>

      <strong>Descrição:</strong>
      <p>{props.description}</p>
      { props.date ? (
        <>
        <strong>Data:</strong>
        <p>{props.date}</p>
        </>
      ): ''}
      <strong>Horário:</strong>
      <p>{props.time}</p>

      {props.children}
    </li>
  );
}
