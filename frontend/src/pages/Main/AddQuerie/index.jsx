import React, { useState } from 'react';
import './style.css';
import api from '../../../services/api';
export default function AddQuerie(props){

    const [ queries_description, setQuerieDesc] = useState('');
    const [ queries_date, setQuerieDate] = useState('');
    const [ queries_time, setQuerieTime] = useState('');
    const user_id = props.name;
    const neuro_id = localStorage.getItem('neuro_id');

    async function handleAddQuerie(e){
        e.preventDefault();

        try{
            const response = await api.post('querie', {
                headers: {
                    authorization: neuro_id,
                    login: user_id
                }
            })
        }catch(err){
            alert("Erro ao marcar consulta")
        }
    }

    return(
        <section className="container_add_querie">
            <form onSubmit={handleAddQuerie}>
                <textarea
                    value={queries_description}
                    onChange={e => setQuerieDesc(e.target.value)}></textarea>
                <input
                    type="date"
                    value={queries_date}
                    onChange={e => setQuerieDate(e.target.value)}/>
                <input
                    type="time"
                    value={queries_time}
                    onChange={e => setQuerieTime(e.target.value)}/>
                <button type="submit">Adicionar</button>
            </form>
        </section>
    );
}
