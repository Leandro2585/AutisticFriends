import styled from 'styled-components';


export const Container = styled.ul`
	grid-area: container;
	background: rgba(255,255,255,0.1);
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	list-style: none;
	grid-gap: 24px;
	padding: 24px;
  li {
    border-radius: 10px;
    border-left: 10px solid var(--blue);
    background: white;
    position: relative;
    padding: 20px;
    height: 200px;
    button{
      position: absolute;
      top: 10px;
      right: 10px;
      border: 0;
      background: transparent;
    }
    strong{
      font-size: 24px;
    }
    p {
      font-size: 18px;
      margin-top: 20px;
    }
  }
`;

export const Footer = styled.footer`
  position: absolute;
  top: 160px;
	width: 80%;
  height: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
  
`;
