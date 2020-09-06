import React from "react";
import "./App.css";
import Routes from "./components/Routes";

function App() {
  return <Routes />;
}

export default App;

// const BodyWrapper = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   ${({ theme }) => theme.tablet`
//     justify-content: center;
//   `}
// `;
// const Box1 = styled.button`
//   width: 100px;
//   height: 100px;
//   margin: 10px;
//   ${({ theme }) => theme.tablet`

//   `}
// `;

// const Box2 = styled.button`
//   width: 100px;
//   height: 100px;
//   margin: 10px;
// `;
