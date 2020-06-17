import React, { useState } from 'react';
import { useHistory,Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaUserPlus } from 'react-icons/fa';
import './style.css';
import api from '../../services/api';
export default function Logon(){

    const [ user_email, setUserEmail ] = useState('');
    const [ user_password, setUserPass ] = useState('');

    const history = useHistory();

    async function handleLoginUser(e){
        e.preventDefault()

        try{
            const response = await api.post('session/user', { user_email, user_password })
            localStorage.setItem('user_id', response.data.user_id)
            localStorage.setItem('user_name', response.data.user_name)
            localStorage.setItem('user_tel', response.data.user_tel)
            localStorage.setItem('user_email', response.data.user_email)
            history.push('/profile/dashboard');
        }catch(err){
            alert("Erro no login, tente novamente")
        }
    }

    return(
        <section className="container_log">
            <form className="frm" onSubmit={handleLoginUser}>
                <h1>Login</h1>
                <label>E-mail</label>
                <input
                    type="email"
                    placeholder="example@example.com"
                    value={user_email}
                    onChange={e => setUserEmail(e.target.value)}/>
                <label>Password</label>
                <input
                    type="password"
                    placeholder="**********"
                    value={user_password}
                    onChange={e => setUserPass(e.target.value)}/>
                <button className="btn" type="submit">Log in</button>
                <Link to="/register/user">
                  <FaUserPlus size={15}/>
                  Ainda não possuo uma conta</Link>
                <Link to="/logon/instructor">
                  <FaChalkboardTeacher size={18}/>
                  Sou um Instrutor</Link>
            </form>
        </section>
    );
}
