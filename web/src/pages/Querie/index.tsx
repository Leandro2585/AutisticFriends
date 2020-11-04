import React, { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';
import { Container, Footer } from './style';
import api from '../../services/api';

interface Queries {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  user_querie: number;
}

const Querie: React.FC = () => {
    const [queries, setQueries] = useState<Queries[]>([]);

    const { user } = useAuth();
    const { addToast } = useToast();

    useEffect(() => {
      api.get('querie', {
        headers: {
          user_querie: user.id
        }
      }).then(response => {
        setQueries(response.data);
      });
    }, [user]);

    async function handleDelete(id: number){
      try{
        await api.delete(`querie/${id}`, {
          headers: {
            user_querie: String(user.id)
          }
        });

        setQueries(queries.filter(querie => querie.id !== id));

        addToast({
          type: 'success',
          title: 'Consulta deletada com sucesso'
        });
      }catch(err){
        addToast({
          type: 'success',
          title: 'Erro ao deletar esta consulta'

        });
      }
    }

    return(
          <Container>
          {queries.map(querie => (
            <li key={querie.id}>
      				<strong>{querie.title}</strong>
      				<p>{querie.description}</p>
              <Footer>
                <span>{querie.date}</span>
        				<span>{querie.time}</span>
              </Footer>
      				<button type="button" onClick={() => handleDelete(querie.id)}><FiTrash2 size={18} color="#02182B"/></button>
      		</li>
          ))}
        </Container>
    );
}

export default Querie;
