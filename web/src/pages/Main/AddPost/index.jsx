import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Dropzone from '../../../components/Dropzone';
import './style.css';
import api from '../../../services/api';
export default function AddPost() {
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState('');
  const [post_comment, setPostComment] = useState('');
  const post_user = localStorage.getItem('user_id');
  function handleAddPost(){
    const image = new FormData();
    image.append('post_image', selectedFile);
    image.append('post_comment', post_comment);


    try{
      api.post('post',image,{
          headers: {
              login: post_user
          }
      });

      alert("Postado com sucesso");
      history.push('dashboard');
    }
    catch(err){
      alert(err);
    }
  }
  // useEffect(() => {
  //   alert(selectedFile);
  //   alert(post_comment);
  // }, [selectedFile, post_comment])
  return (
    <form onSubmit={handleAddPost} className="container_post">
      <div>
      <Dropzone onFileUploaded={setSelectedFile}/>
      </div>
      <span>Descrição</span>
      <textarea
          value={post_comment}
          onChange={e => setPostComment(e.target.value)}
          cols="46"
          rows="6"></textarea>
      <button type="submit">Publicar</button>
    </form>
  );
}
