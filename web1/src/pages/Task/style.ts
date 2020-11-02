import styled from 'styled-components';


export const Container = styled.ul`
	grid-area: container;
	background: rgba(255,255,255,0.1);
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	list-style: none;
	grid-gap: 24px;
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
    }
    strong{
      font-size: 24px;
    }
    p {
      font-size: 18px;
      margin-top: 20px;
    }
    span{
      position: absolute;
      left: 20px;
      bottom: 20px;
    }
  }
`;
