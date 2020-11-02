import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import imageBackground from '../../assets/background-register.svg';
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';
import api from '../../services/api';
export default function Register() {
    const history = useHistory();
    const [user_name, setUserName] = useState('');
    const [user_email, setUserEmail] = useState('');
    const [user_password, setUserPass] = useState('');

    async function handleRegisterUser(e) {
        e.preventDefault();
        const data = {
            user_name,
            user_email,
            user_password
        };
        try {
            const response = await api.post('user', data);
            alert("Cadastro realizado com sucesso");
            history.push('/logon/user');
        } catch (err) {
            alert('Erro ao cadastrar , tente novamente mais tarde');
        }
    }

    return (
        <section className="container_log">
            <img src={imageBackground} />
            <form className="frm" onSubmit={handleRegisterUser}>
                <h1>Cadastre-se</h1>
                <h2>Sua plataforma de auxílio ao autista</h2>
                <div className="form-group">

                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Seu nome"
                        value={user_name}
                        onChange={e => setUserName(e.target.value)} />
                    <label>E-mail</label>
                    <input
                        type="email"
                        placeholder="example@example.com"
                        value={user_email}
                        onChange={e => setUserEmail(e.target.value)} />


                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="***********"
                        value={user_password}
                        onChange={e => setUserPass(e.target.value)} />


                    <button type="submit" className="btn">Register</button>
                    <Link to="/logon/user">
                        <FiArrowLeft size={15} />
                    Já possuo uma conta
                    </Link>
                </div>
            </form>

        </section>
    );
}
