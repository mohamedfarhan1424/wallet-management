import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Breadcrumbs,
  CircularProgress,
  Table,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";

const Profile = () => {
  const { isLoading, user, isAuthenticated } = useAuth0();
  if (isLoading) {
    return (
      <div className="App">
        <CircularProgress />
      </div>
    );
  }
  if (!isAuthenticated) {
    return (
      <div>
        <LoginButton />
      </div>
    );
  }
  return (
    <div>
      <h1>
        {" "}
        <Breadcrumbs>
          <Link to="/">Home</Link>

          <Typography color="textPrimary">Profile</Typography>
        </Breadcrumbs>
      </h1>
      <Table>
        <TableRow>
          <TableCell align="center">
            <img alt="Loading..." src={user.picture} />
          </TableCell>
          <TableCell>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </TableCell>
        </TableRow>
      </Table>
    </div>
  );
};

export default Profile;
