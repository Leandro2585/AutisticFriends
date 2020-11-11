import styled from 'styled-components';

export const Container = styled.form`
  grid-area: container;
  margin:20px auto;
  width: 70vw;
  height: 80vh;
  padding: 2vh;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  display: flex;
  overflow: hidden;
  background: #f8f8f2;
  .leaflet-container {

    margin-bottom: 40px;
    border: 1px solid #D3E2E5;
    border-radius: 20px;
  }
`;
export const ContainerData = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
    background: #F0F0F5;
    font-size: 16px;
    text-indent: 1em;
    line-height: 24px;
    border: 1px solid rgba(0,0,0,0.1);
    resize:none;
    color: #6c6c80;
    &::placeholder {
      color: #A0A0B2;
    }
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