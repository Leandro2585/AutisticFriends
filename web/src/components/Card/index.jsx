import React from 'react';
import api from '../../services/api';
import './style.css';
export default function Card(props){
  function dataAtualFormatada(date){
      var data = new Date(date),
          dia  = data.getDate().toString(),
          diaF = (dia.length == 1) ? '0'+dia : dia,
          mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
          mesF = (mes.length == 1) ? '0'+mes : mes,
          anoF = data.getFullYear();
      return diaF+"/"+mesF+"/"+anoF;
  }
  return(
    <li key={props.id}>
      <p className="title">{props.title}</p>

      <p className="description">{props.description}</p>
      { props.date ? (
        <p className="date">{
          dataAtualFormatada(props.date)
        }</p>
      ): ''}
      <p className="time">{props.time}</p>

      {props.children}
    </li>
  );
}
