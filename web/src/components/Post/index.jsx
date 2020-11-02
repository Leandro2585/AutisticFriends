import React from 'react';
import './style.css';
import { FiMessageSquare, FiHeart } from 'react-icons/fi';
export default function Post({ name, image, comment }){
    if(name !== null && name !== undefined){
      var firstLetter = name.substr(0,1);
    }

  return(
    <>
    <div className="post_container">
      <header>
        <nav>
          <div className="letter">{ firstLetter }</div>
          <span>{ name }</span>
        </nav>
      </header>
      <img src={`http://localhost:3001/uploads/${image}`}/>
      <footer>
      <p>{comment}</p>
      <div>
      <FiHeart size={20} color="#000"/>
      <FiMessageSquare size={20} color="#000"/>
      </div>
      </footer>
    </div>
    <br/><br/>
    </>
  );
}
