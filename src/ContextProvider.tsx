import { createContext, FC, ReactElement, useState } from "react";

interface ContextState {
  userEmail: string;
  setEmail: (userEmail: string) => void;
  party: string;
  setParty: (setParty: string) => void;
}
interface ContextProviderProps {
  children: ReactElement;
}

const defaultContextValue = {} as ContextState;
export const Context = createContext(defaultContextValue);

export const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [userEmail, setEmail] = useState("");
  const [party, setParty] = useState("");

  return (
    <Context.Provider
      value={{
        userEmail,
        setEmail,
        party,
        setParty,
      }}
    >
      {children}
    </Context.Provider>
  );
};
