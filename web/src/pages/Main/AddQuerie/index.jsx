import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';
import api from '../../../services/api';
export default function AddQuerie(props){
    const history = useHistory();
    const [ queries_title, setQuerieTitle] = useState('');
    const [ queries_description, setQuerieDesc] = useState('');
    const [ queries_date, setQuerieDate] = useState('');
    const [ queries_time, setQuerieTime] = useState('');
    const user_id = localStorage.getItem('user_id');
    async function handleAddQuerie(e){
        e.preventDefault();
        try{
          const data = {
            queries_title,
            queries_description,
            queries_date,
            queries_time
          };
            const response = await api.post('querie', data,{
                headers: {
                    login: user_id
                }
            })
            alert("Consulta adicionada com sucesso")
            history.push('queries');

        }catch(err){
            alert("Erro ao marcar consulta")
        }
    }
    return(

            <form onSubmit={handleAddQuerie} className="container_add_querie">
                <span>Título</span>
                <input
                    type="text"
                    value={queries_title}
                    onChange={e => setQuerieTitle(e.target.value)}
                />
                <span>Descrição</span>
                <textarea
                    value={queries_description}
                    onChange={e => setQuerieDesc(e.target.value)}
                    cols="46"
                    rows="6"></textarea>
                <span>Data</span>
                <input
                    type="date"
                    value={queries_date}
                    onChange={e => setQuerieDate(e.target.value)}/>
                <span>Horário</span>
                <input
                    type="time"
                    value={queries_time}
                    onChange={e => setQuerieTime(e.target.value)}/>
                <button type="submit">Adicionar</button>
            </form>
    );
}
