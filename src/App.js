import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import { RelayEnvironmentProvider, loadQuery } from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import axios from "axios";

// import { RepositoryNameQuery } from "./Queries/RepositoryNameQuery";
import { UserNameQuery } from "./Queries/UserNameQuery";

import Login from "./components/Login";
import Home from "./components/Home";
import Detail from "./components/Detail";
import theme from "./components/Theme";
import Callback from "./components/Callback";

import "./App.css";
import QueryProcessing from "./components/QueryProcessing";
import Update from "./components/Update";
import Fallback from "./components/Fallback";

const { Suspense } = React;

const AuthTokenContext = React.createContext();

function App() {
  const [authToken, setAuthToken] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      if (window.location.pathname.startsWith("/login")) return;
      if (window.location.pathname.startsWith("/callback")) return;
      window.location.pathname = "/login";
      return;
    }
    setAuthToken(localStorage.getItem("token"));
  }, []);

  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={<Fallback />}>
        <ThemeProvider theme={theme}>
          <AuthTokenContext.Provider value={authToken}>
            <BrowserRouter>
              <div className="App">
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route
                    path="/callback"
                    element={<Callback setAuthToken={setAuthToken} />}
                  />
                  <Route path="/" element={<Home />} />
                  <Route path="/detail" element={<Detail />} />
                  <Route path="/update" element={<Update />} />
                </Routes>
              </div>
            </BrowserRouter>
          </AuthTokenContext.Provider>
        </ThemeProvider>
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;
export { AuthTokenContext };
