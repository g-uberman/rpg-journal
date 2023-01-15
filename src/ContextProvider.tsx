import { createContext, FC, ReactElement, useState } from "react";

interface ContextState {
  user: string;
  setUser: (user: string) => void;
  party: string;
  setParty: (setParty: string) => void;
}
interface ContextProviderProps {
  children: ReactElement;
}

const defaultContextValue = {} as ContextState;
export const Context = createContext(defaultContextValue);

export const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState("");
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
