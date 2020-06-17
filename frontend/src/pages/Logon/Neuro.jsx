import React,{ useState } from 'react';
import { FaUserPlus, FaUser } from 'react-icons/fa';
import './style.css';
import { useHistory, Link } from 'react-router-dom';
import api from '../../services/api';

export default function LogonNeuro(){

  const [ neuro_email, setNeuroEmail ] = useState('');
  const [ neuro_password, setNeuroPass ] = useState('');
  const history = useHistory();

  async function handleLoginNeuro(e){
      e.preventDefault()
      try{
          const response = await api.post('session/neuro', { neuro_email: neuro_email, neuro_password: neuro_password })
          localStorage.setItem('neuro_id', response.data.neuro_id)
          localStorage.setItem('neuro_crm', response.data.neuro_crm)
          localStorage.setItem('neuro_name', response.data.neuro_name)
          localStorage.setItem('neuro_tel', response.data.neuro_tel)
          localStorage.setItem('neuro_email', response.data.neuro_email)
          history.push('/profile');
      }catch(err){
          alert("Erro no login, tente novamente")
      }
    }
      return(
          <section className="container_log">
              <form className="frm" onSubmit={handleLoginNeuro}>
                  <h1>Login</h1>
                  <label>E-mail</label>
                  <input
                      type="email"
                      placeholder="e-mail"
                      value={neuro_email}
                      onChange={e => setNeuroEmail(e.target.value)}/>
                  <label>Senha</label>
                  <input
                      type="password"
                      placeholder="*******"
                      value={neuro_password}
                      onChange={e => setNeuroPass(e.target.value)}/>
                  <button className="btn" type="submit">Log in</button>
                  <Link to="/register/instructor">
                    <FaUserPlus size={18}/>
                    Ainda não possuo cadastro
                    </Link>
                  <Link to="/logon/user">
                    <FaUser size={15}/>
                    Sou um usuário comum
                    </Link>
              </form>

          </section>
      );
  }
