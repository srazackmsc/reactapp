import { Route, Routes } from "react-router";
import "./App.css";
import { useState } from "react";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import RiderJourney from "./components/modules/rider-journey";

function App() {
  const [auth, setAuth] = useState({});
  const token = auth.token;
  return (
    <>
      <Routes>
        {!token && (
          <>
            <Route path="login" element={<Login auth={auth} setAuth={setAuth}/>}/>
            <Route path="sign-up" element={<Signup/>} />
            <Route path="journey/:policyid" element={<RiderJourney />}/>
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
