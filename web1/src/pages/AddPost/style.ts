import styled from 'styled-components';

export const Form = styled.form`
  margin: 20px auto;
  padding: 10px;
  width: 80%;
  height: 65vh;
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 18px;
  }
`;

export const Fieldset = styled.fieldset`
  margin-top: 16px;
  min-inline-size: auto;
  border: 0;
  legend {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 16px;
      margin-bottom: 16px;
    }
  }
  .btn{
    margin-top: 20px;
    float: right;
    width: 50%;
  }
`;

export const Field = styled.div`
  flex: 1;
  display:flex;
  flex-direction: column;
  input {
    width: 100%;
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
`;
