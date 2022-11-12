import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Components/Home";
import { SignIn } from "./Components/SignIn";
import { SignUp } from "./Components/SignUp";
import { Party } from "./Components/Party";
import { History } from "./Components/History";
import { NPC } from "./Components/NPC";
import { Quotes } from "./Components/Quotes";

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
          <Route path="/party" element={<Party />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/npc" element={<NPC />}></Route>
          <Route path="/quotes" element={<Quotes />}></Route>
        </Routes>
        </section>
        </main>
        <StyledFooter />
      </StyledContainer>
  );
}

export default App;
