import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from './Components/Home';
import { SignIn } from './Components/SignIn';
import { SignUp } from './Components/SignUp';

function App() {
  return (
    <>
      app
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
