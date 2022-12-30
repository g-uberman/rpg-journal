import { useState, useContext, useEffect } from "react";
import { Context } from "./../ContextProvider";
import { useNavigate } from "react-router-dom";

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
      Reset password
    </div>
  );
};
