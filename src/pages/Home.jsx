import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { CatogryMovies } from "../services/api";
import { NOWPLAYING_API_URL } from "../constant/constant";
import React from "react";
// Components
import Banner from "../components/Banner";
import Upnext from "../components/Upnext";
import Header from "../components/common/Header";
import Slide  from "../components/Slide"

const Wrapper = styled(Box)`
  display: flex;
  padding: 20px 0;
`;
const Component = styled(Box)`
  padding: 0 115px;
`;
function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let response = await CatogryMovies(NOWPLAYING_API_URL);
      setMovies(response.results);
    };
    getData();
  }, []);
  return (
    <>
      <Header></Header>
      <Component>
        <Wrapper>
          <Banner movies={movies}></Banner>
          <Upnext movies={movies}></Upnext>
        </Wrapper>
        <Slide movies={movies}></Slide>
      </Component>
    </>
  );
}

export default Home;
