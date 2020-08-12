import React, { useState, useEffect } from 'react';
import Card from '../../../components/Card';
import './style.css';
import api from '../../../services/api';
export default function Queries(){

    const [queries, setQuerie] = useState([]);


    // if(localStorage.getItem('neuro_id')){
    //     const neuro_id = localStorage.getItem('neuro_id')
    //     useEffect(() => {
    //         api.get('queries/neuro', {
    //             headers: {
    //                 authorization: neuro_id
    //             }
    //         }).then(response => {
    //             setQuerie(response.data)
    //         });
    //     }, neuro_id)
    //     }

        const user_id = localStorage.getItem('user_id')

        useEffect(() => {
            api.get('querie', {
                headers: {
                    login: user_id
                }
            }).then(response => {
                setQuerie(response.data)
            });
        }, user_id)


    return(
        <section className="container_list">
        <ul>
          {queries.map((querie) => (
          <li>
          <Card
            key={querie.queries_id}
            tb="tb_querie"
            title={querie.queries_title}
            description={querie.queries_description}
            date={querie.queries_date}
            time={querie.queries_time}/>
          </li>
        ))}
        </ul>
        </section>
    );
}
