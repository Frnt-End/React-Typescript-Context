import React from 'react';
import AuthorImg  from '../Img/author.png';



function Author() {
     
    const Portfolio = "https://nirit.website";
    
    
    return (
      <div className="author-container">
        <div>
        <img src={AuthorImg} alt="Autor" />
        <p>Creative & Code:)
        <br /><a href={Portfolio}>nirit.website</a>
        </p>
        </div>
      </div>
    )
}
  
export default Author;
