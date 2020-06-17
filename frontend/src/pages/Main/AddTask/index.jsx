import React, { useState } from 'react';
import './style.css';
import api from '../../../services/api';
export default function AddTask(props){

    const [ task_description, setTaskDesc ] = useState('');
    const [ task_time, setTaskTime ] = useState('');
    const neuro_id = localStorage.getItem('neuro_id');
    const user_id = props.user_id;

    async function handleAddTask(e){
        e.preventDefault()

        try{
            const response = await api.post('task', {
                headers: {
                    authorization:  neuro_id,
                    login: user_id
                }
            });
        }catch(err){
            alert("erro ao adicionar uma nova tarefa");
        }
    }
    return(
        <section className="container_add_task">
            <form onSubmit={handleAddTask}>
                <span>Descrição</span>
                <textarea
                    type="text"
                    value={task_description}
                    onChange={e => setTaskDesc(e.target.value)}></textarea>
                <input
                    type="time"
                    value={task_time}
                    onChange={e => setTaskTime(e.target.value)}/>
                <button type="submit"></button>
            </form>
            { user_id }

        </section>
    );
}
