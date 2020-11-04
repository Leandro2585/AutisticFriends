import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';
import { Container } from './style';
import api from '../../services/api';

const AddTask: React.FC = () => {

    const history = useHistory();
    const { user } = useAuth();
    const { addToast } = useToast();
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    async function handleSubmit(e: FormEvent){
      try{
        e.preventDefault();

        const data = {
          title,
          description,
          date,
          time,
          user_task: user.id
        };

        await api.post('task', data);

        history.push('task');
        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Sua nova tarefa já está disponível na aba de tarefas.'
        });
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Oops...!',
          description: 'Parece que algo deu errado'
        });
        alert(err);
      }
    }
    return(
        <Container onSubmit={handleSubmit}>
                <span>Titulo</span>
                <input
                  type="text"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
                <span>Descrição</span>
                <textarea
                  cols={46}
                  rows={6}
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                ></textarea>
                <span>Data</span>
                <input
                  type="date"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                />
                <span>Horário</span>
                  <input
                    type="time"
                    value={time}
                    onChange={e => setTime(e.target.value)}
                  />

                <button type="submit">Adicionar</button>
        </Container>

    );
}
export default AddTask;
