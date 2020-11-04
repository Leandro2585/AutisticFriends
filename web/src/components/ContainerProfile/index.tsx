import React from 'react';
import { Container } from './style';
const ContainerProfile: React.FC = ({ children }) => {
  return(
    <Container>
      {children}
    </Container>
  );
}

export default ContainerProfile;
