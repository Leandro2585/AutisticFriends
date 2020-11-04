import styled from 'styled-components';

export const Container = styled.ul`
  grid-area: container;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  list-style: none;
`;
export const Post = styled.li`
  width: 60%;
  height: 85vh;
  margin-left: 20%;
  background: #fff;
  grid-area: content;
  position: relative;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  border-top: 1px solid rgba(0,0,0,0.2);
  img{
  	width: 100%;
  	height: auto;
  }

`;
export const Header = styled.header`
	display: flex;
  padding: 10px;
  height: 8vh;  
	align-items: center;
  h2 {
    margin-left: 15px;
    font-size: 16px;
  }
`;
export const Avatar = styled.h1`
	width: 30px;
	height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
	background: var(--blue);
  font-size: 16px;
  font-weight: normal;
`;
export const Footer = styled.footer`
  width: 100%;
	height: 10vh;
  background: #fff;
  span {
    text-indent: 1.5em;
    color:#677085;

  }
`;
