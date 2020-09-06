import React from "react";
import styled from "styled-components";

const ContentWrpper = styled.div`
  /* border: 1px solid red; */
  height: 400px;
  margin: 3em 0;
`;
const ContentTitle = styled.div`
  font-size: 2.5rem;
  height: 20%;
`;
const ContentSliderWrapper = styled.div`
  height: 80%;
  border: 1px solid green;
  display: flex;
  justify-content: space-around;
`;
const ContentSlider = styled.div`
  width: 25%;
  border: 1px solid #000;
`;

// 객체 정리하기
const contentValues = {
  project: {
    title: "Project",
    value1: {
      title: "mayday",
      // image:"~"
    },
    value2: {
      title: "알고뽑자",
    },
    value3: {
      title: "Groupingpong",
    },
  },
  development: {
    title: "Development",
    value1: {
      title: "Javascript",
    },
    value2: {
      title: "React",
    },
    value3: {
      title: "Typescript",
    },
  },
  travel: {
    title: "Travel",
  },
};

const MainContent = ({ value }) => {
  return (
    <ContentWrpper>
      <ContentTitle>{value.title}</ContentTitle>
      <ContentSliderWrapper>
        <ContentSlider />
        <ContentSlider />
        <ContentSlider />
      </ContentSliderWrapper>
    </ContentWrpper>
  );
};

const ContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  margin: 5em 0;
  text-align: center;
`;

const MainContents = () => {
  return (
    <ContentsWrapper>
      <MainContent value={contentValues.project} />
      <MainContent value={contentValues.development} />
      <MainContent value={contentValues.travel} />
    </ContentsWrapper>
  );
};

export default MainContents;
