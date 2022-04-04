import React, { useState } from "react";
import "../css/readMore.css";

const ReadMore = ({ children }) => {
  const text = children.join("");
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="article-font">
      {isReadMore ? text.slice(0, 250) + "..." : text}
      <br />
      <button type="button" className="btn" onClick={toggleReadMore}>
        {isReadMore ? "Read more" : "Show less"}
      </button>
    </p>
  );
};

export default function Content({ article }) {
  return (
    <div>
      <h2>
        <ReadMore> {article} </ReadMore>
      </h2>
    </div>
  );
}
