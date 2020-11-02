import React,{ useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiCalendar, FiBookmark } from 'react-icons/fi';
import './style.css';
import api from '../../../services/api';
export default function Users(){
    const [ users, setUsers ] = useState([]);
    const user_id = localStorage.getItem('user_id');
    const history = useHistory();
    useEffect(() => {
      api.get('users', {
        headers: {
          authorization: user_id
        }
      }).then(response => {
              setUsers(response.data)
          })
    }, [user_id]);

    function handleTaskClick(id){
      history.push(`/profile/addTask`)
    }
    function handleQuerieClick(id){
      history.push(`/profile/addQuerie`)
    }
    function firstLetter(name){
      return name.substring(0,1);
    }
    return(
        <section className="container_user">
          <ul>
            {
              users.map((user, index) => (
              <li key={index + 1}>
                <span className="letter">{firstLetter(user.user_name)}</span>
                <span className="name">{user.user_name}</span>
                <span className="id-unique">{user.user_id}</span>
                <span className="email">{user.user_email}</span>
                <FiCalendar className="icon" size={15} onClick={() => handleTaskClick(user.user_id)}/>
                <FiBookmark className="icon" size={15} onClick={() => handleQuerieClick(user.user_id)}/>
              </li>
            ))
          }
          </ul>
        </section>
    );
}
