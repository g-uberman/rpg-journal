import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar, PartyHeader } from "./Components/NavBar";
import { Home } from "./Components/Home";
import { SignIn } from "./Components/SignIn";
import { SignUp } from "./Components/SignUp";
import { Settings } from "./Components/Settings";
import { History } from "./Components/History";
import { NPC } from "./Components/NPC";
import { Quotes } from "./Components/Quotes";
import { Credits } from "./Components/Credits";
import { Party } from "./Components/Party";
import { Header } from "./Components/HeaderFooter";
import { Footer } from "./Components/HeaderFooter";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";
import { ResetPassword } from "./Components/ResetPassword";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth, firebaseDb } from "./index";
import { Context, noUser } from "./ContextProvider";

function App() {
  const { user, setUser } = useContext(Context);

  useEffect((): void => {
    onAuthStateChanged(firebaseAuth, async (userFB) => {
      if (userFB) {
        const userEmail = userFB.email;
        setUser({...user, email: userEmail || ""});
      } else {
        setUser(noUser);
      }
    });
  }, []);

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
              <Route path="/resetpass" element={<ResetPassword />}></Route>
              <Route path="/party" element={<Party />}></Route>
              <Route path="/history" element={<History />}></Route>
              <Route path="/npc" element={<NPC />}></Route>
              <Route path="/quotes" element={<Quotes />}></Route>
              <Route path="/settings" element={<Settings />}></Route>
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
