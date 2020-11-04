import React, { useState, useEffect, FormEvent } from 'react';
import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';
import { useHistory } from 'react-router-dom';
import Dropzone from '../../components/Dropzone';
import { Form, Fieldset, Field } from './style';
import api from '../../services/api';


const AddPost: React.FC = () => {
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState<File>();
  const [description, setDescription] = useState('');

  const { user } = useAuth();
  const { addToast } = useToast();

  async function handleSubmit(e: FormEvent){
    e.preventDefault();
      const data = new FormData();
      const likes = 1;
      data.append('description', description);
      data.append('likes', String(likes));
      data.append('user_post', String(user.id));
      if(selectedFile){
        data.append('image', selectedFile);
      }
      await api.post('post', data);

      history.push('dashboard');
      addToast({
        type: 'success',
        title: 'Cadastro realizado!',
        description: 'Você já pode fazer seu logon no AutisticFriends'
      });


  }
  return (
    <Form onSubmit={handleSubmit}>
      <h1>Novo Post</h1>
      <Dropzone onFileUploaded={setSelectedFile}/>
      <Fieldset>
          <span>Comentário</span>
        <Field>
          <input
            type="text"
            name="comment"
            id="comment"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </Field>
        <button className="btn" type="submit">Compartilhar</button>
      </Fieldset>

    </Form>
  );
}
export default AddPost;
