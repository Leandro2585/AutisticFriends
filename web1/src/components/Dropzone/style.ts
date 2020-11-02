import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    height: 200px;
    background: #e1faec;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 48px;
    outline: 0;
    img {
        width: 80%;
        height: 80%;
        object-fit: cover;
    }
    p {
        width: calc(100% - 60px);
        height: calc(100% - 60px);
        border-radius: 10px;
        border: 1px dashed var(--blue);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #111;
        svg {
            color: var(--blue);
            width: 24px;
            height: 24px;
            margin-bottom: 8px;
        }
    }
`;
