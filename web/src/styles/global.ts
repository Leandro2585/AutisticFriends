import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root{
    --dark:#02182B;
    --blue:#0197F6;
    --light: #B6F4F6;
}
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
body {
    font-family: sans-serif;
    color:var(--dark);
    background: #fafafa;
    overflow-y: hidden;
}
input{
  border:0;
  border-radius: 1px;
  width:90%;
  height: 6vh;
  padding:10px 20px;
}
input, textarea{
  font-size: 16px;
  padding: 10px;
  border-radius: 10px;
}
a{
  text-decoration: none;
  color: var(--dark);
  padding-top: 10px;
  font-size: 15px;
}
.btn{
  border:0;
  background-color: var(--blue);
  width: 90%;
  height: 6vh;
  color: #fff;
  font-size: 1rem;
}
`;
