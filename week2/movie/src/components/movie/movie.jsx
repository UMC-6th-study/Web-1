import { useState } from "react";

export default function Movie({ props }) {
  const [isHovering, setHover] = useState(false);
  const { poster_path, title, vote_average, overview } = props;

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <div
      className={`movie ${isHovering ? "hover" : ""} `}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={title}
      />
      <p className={` ${isHovering ? "overview" : "before-hover"} `}>
        {overview}
      </p>
      <div className="content">
        <span>{title}</span>
        <span>{vote_average}</span>
      </div>
    </div>
  );
}
