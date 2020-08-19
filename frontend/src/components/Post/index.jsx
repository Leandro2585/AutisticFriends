import React from 'react';
export default function Post({ name, image, comment, created_at }){
    if(name !== null && name !== undefined){
      var firstLetter = name.substr(0,1);
    }

  return(
    <div className="post_container">
      <header>
        <nav>
          <div className="letter">{ firstLetter }</div>
          <span>{ name }</span>
          <span>created_at{ created_at }</span>
        </nav>
      </header>
      <img src={image}/>
      <span>{comment}</span>
    </div>
  );
}
