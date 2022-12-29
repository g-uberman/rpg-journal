import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../ContextProvider";

export const Home = () => {
  const navigate = useNavigate();
  const { userEmail } = useContext(Context);

  // force out unlogged users
  useEffect(() => {
    if (!userEmail) {
      navigate("/signin");
    }
  }, []);

  return <>Strona główna</>;
};
