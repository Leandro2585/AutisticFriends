import React, { useState, useEffect } from 'react';
import './style.css';
import api from '../../../services/api';
import Post from '../../../components/Post';
export default function Dashboard(){
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    api.get('post').then(response => {
      setPosts(response.data);
    });
  }, []);
  return(
    <section className="container_dashboard">
    {posts.map(({
      post_id,
      post_image,
      post_comment,
      user_name }) => (
      <Post
        key={post_id}
        name={user_name}
        image={post_image}
        comment={post_comment}
      />
    ))}

    </section>
  );
}
