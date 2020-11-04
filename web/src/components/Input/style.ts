import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerInputProps {
    isErrored: boolean;
    isFilled: boolean;
    isFocused: boolean;
}
export const Container = styled.div<ContainerInputProps>`
    border: 2px solid rgba(0,0,0,0.05);
    color: #666360;
    background: #F5F5F5;
    border-radius: 10px;
    padding: 16px;
    width: 80%;
    height: 8vh;
    display: flex;
    align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${props => props.isErrored && css`
      border-color: #c53030;
    `}
  ${props => props.isFocused && css`
      color: var(--blue);
      border-color: var(--blue);
    `}
  ${props => props.isFilled && css`
      color: var(--blue);

    `}
    input {
        flex: 1;
        background: transparent;
        color: #232129;
        border:0;
        &::placeholder {
          color: #666360;
        }
      }

  svg {
    margin-right: 16px;
  }
`;
export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
  
`;
