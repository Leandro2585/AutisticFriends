import styled from 'styled-components';

export const Form = styled.form`
  margin: 20px auto;
  padding: 10px;
  width: 70%;
  height: 65vh;
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 24px;
    padding: 20px;
  }
`;

export const Fieldset = styled.fieldset`
  margin-top: 16px;
  min-inline-size: auto;
  border: 0;
  span {
    font-size: 16px;
    margin-bottom: 16px;
    padding-top:20px;
    padding-bottom:10px;
  }
  .btn{
    margin-top: 2em;
    float: right;
    width: 50%;
    font-size: 1em;
    border: 0;
    background: var(--blue);
    height: 6vh;
    color: #f8f8f2;
    border-radius: 8px;
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
