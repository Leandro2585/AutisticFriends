import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FaUserPlus, FaUserCircle } from 'react-icons/fa';
import imageBackground from '../../assets/background.svg';
import './style.css';
import api from '../../services/api';
export default function Logon() {

    const [user_email, setUserEmail] = useState('');
    const [user_password, setUserPass] = useState('');

    const history = useHistory();

    async function handleLoginUser(e) {
        e.preventDefault()

        try {
            const response = await api.post('session/user', { user_email, user_password })
            localStorage.setItem('user_id', response.data.user_id)
            localStorage.setItem('user_name', response.data.user_name)
            localStorage.setItem('user_tel', response.data.user_tel)
            localStorage.setItem('user_email', response.data.user_email)
            history.push('/profile/dashboard');
        } catch (err) {
            alert("Erro no login, tente novamente")
        }
    }

    return (
        <section className="container_log">
            <form className="frm" onSubmit={handleLoginUser}>
                <FaUserCircle className="icon1" size={50} color="#0197F6" />

                <h1>Bem Vindo</h1>
                <h2>Faça seu logon aqui</h2>
                <div className="form-group">
                    <label>E-mail</label>
                    <input
                        type="email"
                        placeholder="example@example.com"
                        value={user_email}
                        onChange={e => setUserEmail(e.target.value)} />
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="**********"
                        value={user_password}
                        onChange={e => setUserPass(e.target.value)} />
                    <button className="btn" type="submit">Log in</button>
                    <Link to="/register/user">
                        <FaUserPlus size={15} />
                  Ainda não possuo uma conta</Link>
                </div>
            </form>
            <img src={imageBackground} alt="background" />
        </section>
    );
}
