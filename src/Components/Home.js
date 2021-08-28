import { useAuth0 } from "@auth0/auth0-react";
import { CircularProgress } from "@material-ui/core";
import React from "react";
import Wallet from "./Wallet";

function Home() {
  const {isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="App">
      <div>
        <h1>Welcome to PayU Sandbox wallet</h1>
        {isLoading && <CircularProgress />}
        {isAuthenticated && <Wallet />}
      </div>
    </div>
  );
}

export default Home;
