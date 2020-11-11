import React, { useEffect, useState } from 'react';
import { Container, Post, Header, Avatar, Footer } from './style';
import api from '../../services/api';

interface PostsProps {
  id: number;
  description: string;
  image: string;
  likes: number;
  user_post: number;
  user: {
    name: string;
  }
}

const Dashboard: React.FC = () => {
  const [posts, setPosts] = useState<PostsProps[]>([]);

  useEffect(() => {
    api.get('/post').then(response => setPosts(response.data));
  },[]);

  return(
    <Container>
      {posts.map(item => {

          return (
            <Post key={item.id}>
              <Header>
                <Avatar>{ item.user.name.substr(0,1) }</Avatar>
                <h2>{item.user.name}</h2>
              </Header>
              <img src={`http://localhost:3333/files/${item.image}`}/>
              <Footer>
                <span>{item.description}</span>
              </Footer>
            </Post>
            );
          }
        )
      }
    </Container>
  );
}

export default Dashboard;
