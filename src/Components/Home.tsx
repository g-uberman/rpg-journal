import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../ContextProvider";

export const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(Context);

  // force out unlogged users
  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, []);

  return <>Strona główna</>;
};
