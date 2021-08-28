import "./App.css";
import LoginButton from "./Components/LoginButton";
import Profile from "./Components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Components/LogoutButton";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const {  isAuthenticated} = useAuth0();
  return (
    <HashRouter>
    <div className="App">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              {" "}Wallet Management
            </Typography>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            
          </Toolbar>
        </AppBar>
        
      </div>
      
    </div>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/profile" component={Profile}></Route>
    </Switch>
    </HashRouter>
  );
}

export default App;
