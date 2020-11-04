import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;
  nav{
    width: 100%;
    height:5vh;
    background-color: white;
    display:flex;
    justify-content: flex-end;
    align-items: center;
    .letter{
      height:30px;
      width:30px;
      text-transform: capitalize;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1em;
      background: var(--blue);
      color: white;
      margin:0 10px;
    }
    span{
      padding:0 10px;
      width:20%;
    }
  }
  .title{
    display: flex;
    height: 10vh;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    h1{
      font-weight: normal;
      font-size: 36px;
    }
    button{
      border: 0;
      border-radius: 4px;
      background: var(--blue);
      width: 20%;
      height: 8vh;
      a{
        width: 100%;
        height: 100%;
        display:flex;
        justify-content: space-evenly;
        align-items:center;
        color:white;
        padding-bottom: 10px;
      }
    }
  }
`;


