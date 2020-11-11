import React, { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';
import { Container, Footer } from './style';
import api from '../../services/api';

interface Tasks {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  user_task: number;
}

const Task: React.FC = () => {
    const [tasks, setTasks] = useState<Tasks[]>([]);

    const { user } = useAuth();
    const { addToast } = useToast();
    
    const data = {
          user_task: String(user.id)
        };

    useEffect(() => {
      api.get('task', {
          headers: data
      }).then(response => {
        setTasks(response.data);
      });
    }, []);

    async function handleDelete(id: number){
      try{
        
        await api.delete(`task/${id}`, {
          headers: data
        });

        setTasks(tasks.filter(task => task.id !== id));

        addToast({
          type: 'success',
          title: 'Tarefa deletada com sucesso'
        });
      }catch(err){
        addToast({
          type: 'success',
          title: 'Erro ao deletar esta tarefa'

        });
      }
    }

    return(
          <Container>
          {tasks.map(task => (
            <li key={task.id}>
      				<strong>{task.title}</strong>
      				<p>{task.description}</p>
              <Footer>
                <span>{task.date}</span>
                <span>{task.time}</span>
              </Footer>
      				<button onClick={() => handleDelete(task.id)} type="button">
                <FiTrash2 size={18} color="#02182B"/>
              </button>
      			</li>
          ))}
        </Container>
    );
}

export default Task;
