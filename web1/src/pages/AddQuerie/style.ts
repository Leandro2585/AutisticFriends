import styled from 'styled-components';

export const Container = styled.form`
  grid-area: container;
  margin:5vh auto;
  width: 50vw;
  height: 65vh;
  padding: 2vh;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  background: #f8f8f2;
  *{
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    border-radius: 4px;
    font-size: 1em;
  }
  input {
    background: #F0F0F5;
    border-radius: 8px;
    border: 1px solid rgba(0,0,0,0.1);
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;
    &::placeholder {
      color: #A0A0B2;
    }
  }
  textarea{
    text-indent: 1.5em;
    resize:none;
  }
  span{
    padding-top:20px;
    padding-bottom:10px;
  }
  button{
    margin-top: 2em;
    font-size: 1em;
    border: 0;
    background: var(--blue);
    height: 6vh;
    color: #f8f8f2;
  }

`;

export const InputGroup = styled.div`
  display: flex;
  flex: 1;
  input {
    width: 50%;
  }
`;
