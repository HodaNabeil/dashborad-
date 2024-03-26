import { createContext  ,Provider, useState} from "react";


export   const User= createContext({});


export default function  Usersdata ({children}) {
  const [auth,setAuth] =useState({})
  return(
    <User.Provider value={{setAuth,auth}}>
      {children}
    </User.Provider>
  )
}