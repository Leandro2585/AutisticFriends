import styled from 'styled-components';

export const Container = styled.div`
  height: 95vh;
  width: 100vw;
  display: flex;
  img{
   width: 50%;
  }
  .frm{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 200px;
      height: 200px;
    }
    .icon1 {
      margin-top: 50px;
    }
    .form-group{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 20%;
      .btn{
        margin-top: 40px;
        width: 80%;
        border-radius: 8px;
      }
      input{
        width: 80%;
        height: 6vh;
        font-size: 1rem;
      }
      label{
        color: rgba(0,0,0,0.8);
        padding-top:30px;
        padding-bottom:5px;
        font-weight: bold;
      }
      a{
        align-self: center;
        margin-top: 10px;
        margin-right: 20%;
        svg{
          margin-right:10px;
        }
      }
    }
    h1{
      margin-top: 1vh;
      font-size: 24px;
      color: rgba(0,0,0,0.8);
    }
    h2{
      margin-top: 1vh;
      margin-bottom: 1vh;
      font-weight: normal;
      font-size: 16px;
      color: rgba(0,0,0,0.5);
    }
  }
`;
