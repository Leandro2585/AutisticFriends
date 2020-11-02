import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';
import { Container, InputGroup } from './style';
import api from '../../services/api';

const AddQuerie: React.FC = () => {

    const history = useHistory();
    const { user } = useAuth();
    const { addToast } = useToast();
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    async function handleSubmit(e: FormEvent){
      e.preventDefault();
      const data = {
        title,
        description,
        date,
        user_querie: user.id
      };
      await api.post('querie', data);

      history.push('querie');
      addToast({
        type: 'success',
        title: 'Cadastro realizado!',
        description: 'Sua consulta já foi agendada.'
      });
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
                <span>Horário</span>
                <InputGroup>
                  <input
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                  />
                  <input
                    type="time"
                    value={time}
                    onChange={e => setTime(e.target.value)}
                  />
                </InputGroup>

                <button type="submit">Adicionar</button>
        </Container>

    );
}

export default AddQuerie;
