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
  const [visitLogin, setVisitLogin] = useState(false);
  const [preloadedQuery, setPreloadedQuery] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      if (window.location.pathname === "/login") return;
      if (window.location.pathname === "/callback") return;
      window.location.pathname = "/login";
    } else {
      setAuthToken(JSON.parse(localStorage.getItem("token")));
    }
  }, [visitLogin]);

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
                  <Route
                    path="/queryprocessing"
                    element={
                      <QueryProcessing setPreloadedQuery={setPreloadedQuery} />
                    }
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
