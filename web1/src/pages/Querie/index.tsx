import React, { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { useAuth } from '../../hooks/AuthContext';
import { Container } from './style';
import api from '../../services/api';

interface Queries {
  id: number;
  title: string;
  description: string;
  date: string;
}

const Querie: React.FC = () => {
    const [queries, setQueries] = useState<Queries[]>([]);

    const { user } = useAuth();

    useEffect(() => {
      api.get('querie', {
        headers: {
          user_querie: user.id
        }
      }).then(response => {
        setQueries([...queries, response.data]);
      });
    }, [user]);

    return(
          <Container>
          {queries.map(querie => (
            <li key={querie.id}>
      				<strong>{querie.title}</strong>
      				<p>{querie.description}</p>
      				<span>{querie.date}</span>
      				<button type="button"><FiTrash2 size={18} color="#d6d6d6"/></button>
      			</li>
          ))}
        </Container>
    );
}

export default Querie;
