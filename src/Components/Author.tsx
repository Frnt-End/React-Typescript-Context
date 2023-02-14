import React from "react";
import AuthorImg from "../Img/author.png";

function Author() {
  const Portfolio = "https://frnt-end.github.io/portfolio/";

  return (
    <div className="author-container">
      <div>
        <img src={AuthorImg} alt="Autor" />
        <p>
          Creative & Code:)
          <br />
          <a href={Portfolio}>Portfolio Website</a>
        </p>
      </div>
    </div>
  );
}

export default Author;
