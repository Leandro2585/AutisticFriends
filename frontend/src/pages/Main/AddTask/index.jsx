import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';
import api from '../../../services/api';
export default function AddTask({ _id }){

    const history = useHistory();
    const [ task_title, setTaskTitle ] = useState('');
    const [ task_description, setTaskDesc ] = useState('');
    const [ task_time, setTaskTime ] = useState('');
    async function handleAddTask(e){
        e.preventDefault()
        const id = localStorage.getItem('user_id');
        const data = {
          task_title,
          task_description,
          task_time,
        };
        try{
            const response = await api.post('task', data,{
                headers: {
                    login: id
                }
            });
            alert("Tarefa adicionada com sucesso");
            history.push('tasks');
        }catch(err){
            alert("erro ao adicionar uma nova tarefa");
        }
    }
    return(
        <form className="container_add_task" onSubmit={handleAddTask}>
                <span>Titulo</span>
                <input
                    type="text"
                    value={task_title}
                    onChange={e => setTaskTitle(e.target.value)}
                />
                <span>Descrição</span>
                <textarea
                    type="text"
                    value={task_description}
                    onChange={e => setTaskDesc(e.target.value)}
                    cols="46"
                    rows="6"></textarea>
                <span>Horário</span>
                <input
                    type="time"
                    value={task_time}
                    onChange={e => setTaskTime(e.target.value)}/>
                <button type="submit">Adicionar</button>
        </form>

    );
}
