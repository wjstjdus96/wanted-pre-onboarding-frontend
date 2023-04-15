import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import styled from "styled-components";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const Wrapper = styled.div`
  margin: 50px;
`;

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
