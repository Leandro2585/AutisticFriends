import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Dropzone from '../../../components/Dropzone';
import './style.css';
import api from '../../../services/api';
export default function AddPost() {
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState();
  const [description, setDesc] = useState('');
  const user_id = localStorage.getItem('user_id');
  function handleAddPost(){
    const data = new FormData();
    data.append('post_comment', description);
    if(selectedFile){
      data.append('post_image', selectedFile);
    }
    try{
      api.post('post', {
          headers: {
              login: user_id
          }
      }, data);
      alert("Postado com sucesso");
      history.push('dashboard');
    }
    catch(err){
      alert(err);
    }
  }
  return (
    <form onSubmit={handleAddPost} className="container_post">
      <div>
      <Dropzone onFileUploaded={setSelectedFile}/>
      </div>
      <span>Descrição</span>
      <textarea
          value={description}
          onChange={e => setDesc(e.target.value)}
          cols="46"
          rows="6"></textarea>
      <button type="submit">Publicar</button>
    </form>
  );
}
