import React, { useContext } from "react";
import AuthContext from "./store/auth-context";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const ctx = useContext(AuthContext) ;
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn ? <Login /> : <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
