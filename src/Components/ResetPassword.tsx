import { useState, useContext, useEffect } from "react";
import { Context } from "./../ContextProvider";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const ResetPassword = () => {
  const { userEmail, setEmail, party, setParty } = useContext(Context);
  const navigate = useNavigate();

  // force out logged users
  useEffect(() => {
    if (userEmail) {
      navigate("/");
    }
  }, [userEmail]);

  return (
    <div className="login">
      <h1>Reset password</h1>
      <p style={{ marginBottom: "3em" }}>
        Molestiae culpa sequi assumenda cumque cum accusamus dolore. Corrupti
        deleniti, iure facere molestiae expedita ratione laudantium minima saepe
        assumenda id illum excepturi?
      </p>
      <div className="loginAnnotations">
        Wróć do <Link to={{ pathname: "/signin" }}>logowania.</Link>
      </div>
    </div>
  );
};
