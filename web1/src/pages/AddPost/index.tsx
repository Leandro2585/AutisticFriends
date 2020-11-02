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
      const like = 1;
      data.append('description', description);
      data.append('like', String(like));
      data.append('user_post', String(user.id));
      if(selectedFile){
        data.append('image', selectedFile);
      }
      await api.post('post', data);

      history.push('dashbaord');
      addToast({
        type: 'success',
        title: 'Cadastro realizado!',
        description: 'Você já pode fazer seu logon no AutisticFriends'
      });


  }
  return (
    <Form onSubmit={handleSubmit}>
      <h1>Nova postagem</h1>
      <Dropzone onFileUploaded={setSelectedFile}/>
      <Fieldset>
        <legend>
          <h2>Comentário</h2>
        </legend>
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
