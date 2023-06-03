import React from "react";
import { Box, Typography, styled } from "@mui/material";

const Component = styled(Box)`
  width: 40%;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  & > p {
    color: #f5c518;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10px;
  }
`;
const Poster = styled("img")({
  width: "88px",
});
const Wrapper = styled(Box)`
  display: flex;
  color: #ffffff;
  & > p {
    margin-left: 20px;
  }
`;

function Upnext({ movies }) {
  return (
    <>
      <Component>
        <Typography>Up Next</Typography>
        {movies.splice(1, 3).map((movie) => (
          <Wrapper  key={movie.id}>
            <Poster
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="poster"
             
            />

            <Typography>{movie.original_title}</Typography>
          </Wrapper>
        ))}
      </Component>
    </>
  );
}

export default Upnext;
