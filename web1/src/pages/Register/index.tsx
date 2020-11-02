import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useToast } from '../../hooks/ToastContext';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import imageBackground from '../../assets/background-register.svg';
import Input from '../../components/Input';
import './style.css';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

interface SignUpFormData {
    name: string;
    email: string;
    password: string;
}

const Register: React.FC = () => {
    const history = useHistory();
    const formRef = useRef<FormHandles>(null);

    const { addToast } = useToast();

    const handleRegisterSubmit = useCallback(
        async (data: SignUpFormData) => {
            try {
                formRef.current?.setErrors({});

                const schema = Yup.object().shape({
                    name: Yup.string()
                        .required('Nome obrigatório'),
                    email: Yup.string()
                        .required('E-mail obrigatório')
                        .email('Digite um e-mail válido'),
                    password: Yup.string()
                        .required('Senha obrigatória')
                        .min(6, 'No mínimo 6 caracteres')
                });
                await schema.validate(data, {
                    abortEarly: false
                });

                await api.post('/user', data);

                history.push('/logon');
                addToast({
                  type: 'success',
                  title: 'Cadastro realizado!',
                  description: 'Você já pode fazer seu logon no AutisticFriends'
                });

            } catch (err) {
                if(err instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(err);
                    formRef.current?.setErrors(errors);
                    return;
                }
                addToast({
                    type: 'error',
                    title: 'Erro no cadastro',
                    description: 'Ocorreu um erro ao realizar o cadastro, tente novamente'
                });
            }
    }, [addToast, history]);

    return (
        <section className="container_log">
            <img src={imageBackground} />
            <Form ref={formRef} className="frm" onSubmit={handleRegisterSubmit}>
                <FaUserCircle className="icon1" size={50} color="#0197F6" />

                <h1>Cadastre-se</h1>
                <h2>Sua plataforma de auxílio ao autista</h2>
                <div className="form-group">
                    <label>Name</label>
                    <Input
                      icon={FiUser}
                      name="name"
                      placeholder="Name"
                    />
                    <label>E-mail</label>
                    <Input
                      icon={FiMail}
                      name="email"
                      type="email"
                      placeholder="E-mail"
                    />
                    <label>Password</label>
                    <Input
                      icon={FiLock}
                      name="password"
                      type="password"
                      placeholder="Senha"
                    />
                    <button type="submit" className="btn">Cadastrar</button>
                    <Link to="/logon">
                        <FiArrowLeft size={15} />
                        Já possuo uma conta
                    </Link>
                </div>
            </Form>

        </section>
    );
}
export default Register;
