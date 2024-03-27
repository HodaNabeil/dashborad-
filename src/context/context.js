

import { createContext, useState } from "react";

export const UserContext = createContext({});

export default function Usersdata({ children }) {
  const [auth, setAuth] = useState({});

  console.log(auth)

  return (
    <UserContext.Provider value={{ auth,  setAuth}}>
      {children}
    </UserContext.Provider>
  );
}
