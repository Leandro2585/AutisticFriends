import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  nav{
  	width: 50%;
  	height: 10vh;
  	ul{
      list-style: none;
      display: flex;
      li{
        border: 2px solid var(--blue);
        padding: 16px;
      }
	}
  }
`;

