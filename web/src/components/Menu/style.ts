import styled from 'styled-components';

export const Container = styled.aside`
  grid-area: menu;
  background: white;
  box-shadow: 10px 10px 100px rgba(0,0,0,0.1);
  .logo{
    width: 100%;
    height: 20vh;
    background:#f8f8f2;
    img {
      width: 150px;
      height: 150px;
    }
  }
  nav{
    width: 100%;
    height: 60vh;
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    a{
      width: 100%;
      height:50px;
      font-size: 1.2em;
      padding:0 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: .1s;
      color:#677085;
      &:hover,
      &:focus{
        border-right:1px solid;
        border-color: var(--blue);
        color: var(--blue);
        opacity: 01;
      }
    }
  }
`;
