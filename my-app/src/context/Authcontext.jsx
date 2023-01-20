import { createContext, useState } from "react";
//c-p-c
export const Authcontext = createContext();
const AuthcontextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);
  const login = () => {
    setIsAuth(true);
  };
  const logout = () => {
    setIsAuth(false);
  };
  return (
    <Authcontext.Provider value={{ isAuth, login, logout }}>
      {children}
    </Authcontext.Provider>
  );
};
export default AuthcontextProvider;
