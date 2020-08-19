import React, { useState, useEffect } from 'react';
import './style.css';
import api from '../../../services/api';
import Post from '../../../components/Post';
export default function Dashboard(){
  const [posts, setPosts] = useState([]);
  const user_id = localStorage.getItem('user_id');
  useEffect(() => {
    api.get('post').then(response => {
      setPosts(response.data);
    });
  }, [user_id]);
  return(
    <section className="container_dashboard">
    {posts.map(({
      post_id,
      post_image,
      image_url,
      post_comment,
      user_name,
      created_at }) => (
      <Post
        key={post_id}
        name={user_name}
        image={image_url}
        comment={post_comment}
        created_at={created_at}/>
    ))}

    </section>
  );
}
