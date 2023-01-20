import { useContext } from "react";
import { Authcontext } from "../context/Authcontext";
import { Navigate } from "react-router-dom";
const Login = () => {
  const { login, isAuth } = useContext(Authcontext);
  const handlelogin = () => {
    login();
  };
  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div>
        <h1>Login Section</h1>
        <button onClick={handlelogin}>Login</button>
      </div>
    </>
  );
};
export default Login;
