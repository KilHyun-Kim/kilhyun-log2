import React from "react";
import styled from "styled-components";
import MainContents from "../block/MainContents";

const MainWrapper = styled.main`
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;
const Main = () => {
  return (
    <MainWrapper>
      <MainContents />
    </MainWrapper>
  );
};

export default Main;
