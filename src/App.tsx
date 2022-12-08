import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar, PartyHeader } from "./Components/NavBar";
import { Home } from "./Components/Home";
import { SignIn } from "./Components/SignIn";
import { SignUp } from "./Components/SignUp";
import { Party } from "./Components/Party";
import { History } from "./Components/History";
import { NPC } from "./Components/NPC";
import { Quotes } from "./Components/Quotes";
import { Credits } from "./Components/Credits";
import { Members } from "./Components/Members";
import { Header } from "./Components/HeaderFooter";
import { Footer } from "./Components/HeaderFooter";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>

        <div id="scroll">
        <Header />
        <main>
          <PartyHeader />
          <NavBar />
          <section>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/signin" element={<SignIn />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/party" element={<Party />}></Route>
              <Route path="/members" element={<Members />}></Route>
              <Route path="/history" element={<History />}></Route>
              <Route path="/npc" element={<NPC />}></Route>
              <Route path="/quotes" element={<Quotes />}></Route>
            </Routes>
          </section>
          <Credits />
        </main>
        <Footer />
        </div>

    </ThemeProvider>
  );
}

export default App;
