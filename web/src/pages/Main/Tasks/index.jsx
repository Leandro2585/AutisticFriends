import React, { useEffect, useState } from 'react';
import './style.css';
import Card from '../../../components/Card';
import { FiTrash2 } from 'react-icons/fi';

import api from '../../../services/api';

export default function Task(){
    const [tasks, setTask] = useState([]);
    const user_id = localStorage.getItem('user_id');

    useEffect(() => {
      api.get('tasks', {
        headers: {
          login: user_id
        }
      }).then(response => {
              setTask(response.data)
          })
    }, [user_id]);

    async function handleDeleteTask(task_id){
        await api.delete(`task/${task_id}`)
          .then(response => {
              setTask(tasks.filter(item => item.task_id !== task_id))
              alert('Deletada com sucesso');
            })
          .catch(err => {
              alert(err);
            });
    }
    return(
        <section className="container_list">
          <ul>
          { tasks.map((task) => (
          <Card
            key={task.task_id}
            tb="tb_task"
            title={task.task_title}
            description={task.task_description}
            time={task.task_time}
          >
            <button
              onClick={() => handleDeleteTask(task.task_id)}
              type="submit">
              <FiTrash2 size={20} color="#bdbdbd"/>
            </button>
          </Card>
        ))}
          </ul>
        </section>
    );
}
