import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';
import api from '../../services/api';
export default function Register(){

    const history = useHistory();
    const [ neuro_crm, setNeuroCrm ] = useState('');
    const [ neuro_name, setNeuroName ] = useState('');
    const [ neuro_email, setNeuroEmail ] = useState('');
    const [ neuro_tel, setNeuroTel ] = useState('');
    const [ neuro_password, setNeuroPass ] = useState('');

    async function handleRegisterNeuro(e){
        e.preventDefault();
        const data = {
            neuro_crm,
            neuro_name,
            neuro_tel,
            neuro_email,
            neuro_password
        };
        try{
            const response = await api.post('neuro', data)
            alert("Cadastro realizado com sucesso")
            history.push('/logon/instructor')
        } catch(err){
            alert('Erro ao cadastrar , tente novamente mais tarde')
        }
    }

    return(
        <section className="container_cad">
            <form className="frm" onSubmit={handleRegisterNeuro}>
            <h1>Register</h1>
            <div className="label-group">
            <label>Name</label>
            <label>CRM</label>
            </div>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Seu nome"
                    value={neuro_name}
                    onChange={e => setNeuroName(e.target.value)}/>
                <input
                    type="text"
                    placeholder="CRM"
                    value={neuro_crm}
                    onChange={e => setNeuroCrm(e.target.value)}/>
            </div>

              <label>E-mail</label>
                <input
                    type="email"
                    placeholder="example@example.com"
                    value={neuro_email}
                    onChange={e => setNeuroEmail(e.target.value)}/>
              <div className="label-group">
              <label>Telephone</label>
              <label>Password</label>
              </div>
              <div className="input-group">
                <input
                    type="text"
                    placeholder="Tel:"
                    value={neuro_tel}
                    onChange={e => setNeuroTel(e.target.value)}/>

                <input
                    type="password"
                    placeholder="**********"
                    value={neuro_password}
                    onChange={e => setNeuroPass(e.target.value)}/>
              </div>
                <button className="btn" type="submit">Register</button>
                <Link to="/logon/instructor">
                <FiArrowLeft size={15}/>
                  Já possuo uma conta
                </Link>
                <Link to="/register/user">
                <FiArrowLeft size={15}/>
                  Sou um usuário comum
                </Link>
            </form>
        </section>
    );
}
