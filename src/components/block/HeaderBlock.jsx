import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  ${({ padding }) => padding && `padding : ${padding};`}
  z-index:1;
  background-image: linear-gradient(to right, #0acffe 0%, #495aff 100%);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
  color: white;
`;
// const HeaderPoint = styled.div`
//   width: 30%;
// `;
const Logo = styled.div`
  position: relative;
  /* width: 30%; */
  transition: 0.6s;
  font-size: 4em;
  text-transform: uppercase;
  font-weight: bold;
`;

const HeaderUl = styled.ul`
  width: 30%;
  display: flex;
  justify-content: space-around;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const linkValues = ["home", "project", "development", "travel"];
const HeaderBlock = ({ paddingValue }) => {
  return (
    <HeaderWrapper padding={paddingValue}>
      {/* <HeaderPoint></HeaderPoint> */}
      <Link to="/">
        <Logo>Kilhyun-log</Logo>
      </Link>
      <HeaderUl>
        {linkValues.map((linkValue, index) => (
          <Link to={`/${linkValue}`}>
            <li key={index}>{linkValue}</li>
          </Link>
        ))}
      </HeaderUl>
    </HeaderWrapper>
  );
};

export default HeaderBlock;
