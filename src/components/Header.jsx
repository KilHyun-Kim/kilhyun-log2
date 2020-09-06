import * as React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";
import HeaderBlock from "./block/HeaderBlock";

const { useEffect, useState } = React;

const Header = () => {
  const [scrollValue, setScrollValue] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    setScrollValue(winScroll);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      {scrollValue > 100 ? (
        <HeaderBlock paddingValue="10px 120px" />
      ) : (
        <HeaderBlock paddingValue="20px 120px" />
      )}
    </>
  );
};

export default Header;
