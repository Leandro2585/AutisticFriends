import React,{ useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiCalendar, FiBookmark } from 'react-icons/fi';
import './style.css';
import api from '../../../services/api';
export default function Users(){
    const [ users, setUsers ] = useState([]);
    const neuro_id = localStorage.getItem('neuro_id');
    const history = useHistory();
    useEffect(() => {
      api.get('users', {
        headers: {
          authorization: neuro_id
        }
      }).then(response => {
              setUsers(response.data)
          })
    }, [neuro_id]);

    function handleTaskClick(id){
      history.push(`/Profile/addTask`, { id })
    }
    function handleQuerieClick(id){
      history.push(`/Profile/addQuerie`, { id })
    }

    return(
        <section className="container_user">
          <header>
            <span>Nome</span>
            <span>Id</span>
            <span>E-mail</span>
            <span>Telefone</span>
          </header>
          <ul>
            {
              users.map((user, index) => (
              <li key={index + 1}>
                <span className="key">{index + 1}</span>
                <span className="letter">L</span>
                <span className="name">{user.user_name}</span>
                <span className="id-unique">{user.user_id}</span>
                <span className="email">{user.user_email}</span>
                <span className="number">{user.user_tel}</span>
                <FiCalendar className="icon" size={15} onClick={() => handleTaskClick(user.user_id)}/>
                <FiBookmark className="icon" size={15} onClick={() => handleQuerieClick(user.user_id)}/>
              </li>
            ))
          }
          </ul>
        </section>
    );
}
