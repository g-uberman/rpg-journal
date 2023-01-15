import { createContext, FC, ReactElement, useState } from "react";

interface ContextState {
  user: User;
  setUser: (user: User) => void;
  party: string;
  setParty: (setParty: string) => void;
}
interface ContextProviderProps {
  children: ReactElement;
}
interface User {
  email: string;
  displayName?: string;
}

const defaultContextValue = {} as ContextState;
export const Context = createContext(defaultContextValue);

export const noUser: User = {
  email: "",
  displayName: ""
}

export const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState(noUser);
  const [party, setParty] = useState("");

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        party,
        setParty,
      }}
    >
      {children}
    </Context.Provider>
  );
};
