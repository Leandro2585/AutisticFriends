import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows:20vh 80vh;
  grid-template-areas:"menu header"
                      "menu container";
  background-color: #C7D8FF;
`;
