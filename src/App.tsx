import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { SignIn } from "./Components/SignIn";
import { SignUp } from "./Components/SignUp";
import { NavBar } from "./Components/NavBar";
import {
  StyledContainer,
  StyledHeader,
  StyledFooter,
  StyledBorderRight,
  StyledBorderLeft,
} from "./Components/Styles/Container.styles";

function App() {
  return (
      <StyledContainer>
        <StyledHeader />
        <StyledBorderRight />
        <StyledBorderLeft />
        <main>
        <NavBar />
        <section>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
        </section>
        </main>
        <StyledFooter />
      </StyledContainer>
  );
}

export default App;
