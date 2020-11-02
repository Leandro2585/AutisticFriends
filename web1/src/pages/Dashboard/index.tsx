import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/AuthContext';
import { Container, Post, Header, Avatar, Footer } from './style';
import api from '../../services/api';

interface Posts {
  id: number;
  description: string;
  image: string;
  likes: number;
  user_post: {
    name: string;
  }
}

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  const [posts, setPosts] = useState<Posts[]>([]);
  useEffect(() => {
    api.get('post').then(response => {
      setPosts([...posts, response.data]);
    });
  }, []);
  return(
    <Container>
    {posts.map(post => (
      <Post key={post.id}>
        <Header>
          <Avatar/>
          <strong>{post.user_post.name}</strong>
        </Header>
        <img src={post.image}/>
        <Footer>
          <p>{post.description}</p>
        </Footer>
      </Post>

    ))}
    </Container>
  );
}

export default Dashboard;
