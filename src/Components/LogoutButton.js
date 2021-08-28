import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, makeStyles, Menu } from "@material-ui/core";

import { Avatar, MenuItem} from "@material-ui/core";
import {
  ArrowDropDown,
  ExitToApp,
  Person,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
const LogoutButton = () => {
  const { logout, user } = useAuth0();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const history=useHistory()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <Avatar src={user.picture} alt={user.name} />
      <Button onClick={handleClick} color="inherit">
        <ArrowDropDown />{" "}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{handleClose();history.push("/profile")}}>
          <Person />
          Profile
        </MenuItem>
        <MenuItem onClick={() => {logout({ returnTo: window.location.origin });handleClose()}}>
          <ExitToApp />
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LogoutButton;
