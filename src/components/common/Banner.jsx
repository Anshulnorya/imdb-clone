import React from "react";
import Carousel from "react-multi-carousel";
import { Box, styled } from "@mui/material";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Styledbanner = styled("img")({
  width: "100%",
});
function Banner({ movies }) {
  return (
    <>
      <Box style={{ width: "65%" }}>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          autoPlay={true}
          autoPlaySpeed={2000}
          infinite={true}
        >
          {movies.map((movie) => (
            <Styledbanner
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt=""
            />
          ))}
        </Carousel>
      </Box>
    </>
  );
}

export default Banner;
