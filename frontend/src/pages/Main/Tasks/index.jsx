import React, { useEffect, useState } from 'react';
import './style.css';
import Card from '../../../components/Card';
import api from '../../../services/api';

import UsersList from '../Users';
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

    return(
        <section className="container_list">
          <ul>
        {tasks.map((task) => (
          <li>
          <Card
            key={task.task_id}
            tb="tb_task"
            title={task.task_title}
            description={task.task_description}
            time={task.task_time}/>
          </li>
        ))}
          </ul>
        </section>
    );
}
