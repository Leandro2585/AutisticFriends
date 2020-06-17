import React, { useState, useEffect } from 'react';
import './style.css';
import api from '../../../services/api';
export default function Queries(){

    // const [ querie, setQuerie ] = useState([]);
    //
    //
    // if(localStorage.getItem('neuro_id')){
    //     const neuro_id = localStorage.getItem('neuro_id')
    //     useEffect(() => {
    //         api.get('querie/neuro', {
    //             headers: {
    //                 authorization: neuro_id
    //             }
    //         }).then(response => {
    //             setQuerie(response.data)
    //         });
    //     }, neuro_id)
    //     }
    // else if(localStorage.getItem('user_id')){
    //     const user_id = localStorage.getItem('user_id')
    //
    //     useEffect(() => {
    //         api.get('querie', {
    //             headers: {
    //                 login: user_id
    //             }
    //         }).then(response => {
    //             setQuerie(response.data)
    //         });
    //     }, user_id)
    //     }

    return(
        <section className="container_list">
        <ul>
          <li>a</li>
          <li>b</li>
          <li>c</li>
          <li>d</li>
          <li>e</li>
          <li>f</li>
          <li>g</li>
          <li>h</li>
        </ul>
        </section>
    );
}
