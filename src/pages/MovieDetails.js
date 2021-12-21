import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MovieState } from "../MovieState";
import Award from "";

export default function MovieDetail() {
  const location = useLocation();
  const url = location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie);
  }, [location, movies, url]);
  return (
    <>
      {movie && (
        <Details>
          <Headline>
            <h2>{movie[0].title}</h2>
            <img src={movie[0].mainImg} alt="movie"></img>
          </Headline>
          <Awards>
            {movie[0].awards.map((a) => (
              <Award />
            ))}
          </Awards>
        </Details>
      )}
    </>
  );
}
const Awards = styled.div``;
const Details = styled.div`
  color: white;
`;
const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
