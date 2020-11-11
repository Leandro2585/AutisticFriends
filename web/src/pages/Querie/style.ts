import styled from 'styled-components';


export const Container = styled.ul`
	grid-area: container;
	overflow-y: scroll;
	background: rgba(255,255,255,0.1);
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	list-style: none;
	grid-gap: 24px;
  padding: 24px;
  li {
    border-radius: 10px;
    border-left: 10px solid var(--blue);
    background: white;
    position: relative;
    padding: 20px;
    height: 400px;
    button{
      position: absolute;
      top: 10px;
      right: 10px;
      border: 0;
      background: transparent;
    }
    strong{
      font-size: 24px;
      opacity: 0.8;
    }
    p {
      font-size: 18px;
      margin-top: 20px;
      opacity: 0.8;

    }
  }
`;
export const MapContainer = styled.div`
  width: 90%;
  height: 180px;
  margin-top: 10px;
  margin-bottom: 5px;
  .toGoogleMaps {
  	color: #6c6c80;
  	padding: 10px;
  	font-size: 14px;
  	text-decoration: underline;
  }
`;
export const Footer = styled.footer`
  position: absolute;
  bottom: 10px;
  width: 80%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    opacity: 0.8;
  }
`;
