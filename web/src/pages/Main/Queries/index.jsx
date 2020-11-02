import React, { useState, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import Card from '../../../components/Card';
import './style.css';
import api from '../../../services/api';
export default function Queries(){
    const [queries, setQuerie] = useState([]);
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
    async function handleDeleteQuerie(querie_id){
      await api.delete(`querie/${querie_id}`)
        .then(response => {
            setQuerie(queries.filter(item => item.querie_id !== querie_id))
            alert('Deletada com sucesso');
          })
        .catch(err => {
            alert(err);
          });
    }
    return(
        <section className="container_list">
        <ul>
          {queries.map((querie) => (
            <Card
              key={querie.queries_id}
              tb="tb_querie"
              title={querie.queries_title}
              description={querie.queries_description}
              date={querie.queries_date}
              time={querie.queries_time}>
              <button
                onClick={() => handleDeleteQuerie(querie.querie_id)}
                type="submit">
                <FiTrash2 size={20} color="#bdbdbd"/>
              </button>
            </Card>
        ))}
        </ul>
        </section>
    );
}
