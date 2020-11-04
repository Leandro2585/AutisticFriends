import React, { useRef, useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import { FaUserPlus, FaUserCircle } from 'react-icons/fa';
import { FiMail, FiLock } from 'react-icons/fi';
import imageBackground from '../../assets/background.svg';
import Input from '../../components/Input';
import { Container } from './style';

interface SignInFormData {
  email: string;
  password: string;
}

const Logon: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const history = useHistory();

    const { signIn } = useAuth();
    const { addToast } = useToast();

    const handleSubmit = useCallback(
      async (data: SignInFormData) => {

      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string()
            .required('Senha obrigatória')
        });

        await schema.validate(data, {
          abortEarly: false
        });

        await signIn({
          email: data.email,
          password: data.password
        });
        addToast({
          type: 'success',
          title: 'Logon realizado com sucesso',
        });
        history.push('/dashboard');
      } catch (err) {
        if(err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro de autenticação',
          description: 'Ocorreu um erro ao fazer logon, verifique suas credenciais.'
        });
      }
    }, [signIn, addToast, history]);

    return (
        <Container>
            <Form ref={formRef} className="frm" onSubmit={handleSubmit}>
                <FaUserCircle className="icon1" size={50} color="#0197F6" />

                <h1>Bem Vindo</h1>
                <h2>Faça seu logon aqui</h2>
                <div className="form-group">
                    <label>E-mail</label>
                    <Input
                      icon={FiMail}
                      name="email"
                      placeholder="E-mail"
                    />
                    <label>Password</label>
                    <Input
                      icon={FiLock}
                      name="password"
                      type="password"
                      placeholder="Senha"
                    />
                    <button className="btn" type="submit">Log in</button>
                    <Link to="/register">
                        <FaUserPlus size={15} />
                  Ainda não possuo uma conta</Link>
                </div>
            </Form>
            <img src={imageBackground} alt="background" />
        </Container>
    );
}

export default Logon;
