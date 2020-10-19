/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";
import { cardStyle, NoPadding, cardActionColumnFlexBox } from "../styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import { setLoginStatus } from "../actions";
import { ProductService } from "../services/ProductService";
import Typography from "@material-ui/core/Typography";

const LoginUnwrapped = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const onUserNameEntered = (e) => {
    setUserName(e.target.value);
  };

  const onPasswordEntered = (e) => {
    setPassword(e.target.value);
  };

  const onLoginClick = () => {
    ProductService.getAccessToken(userName, password).then((response) => {
      if (response.ErrorCode) {
        localStorage.setItem("login_status", "false");
        props.setLoginStatus(false);
        setErrorMessage(true);
      } else {
        localStorage.setItem("access_token", response.access_token);
        localStorage.setItem("refresh_token", response.refresh_token);
        localStorage.setItem("login_status", "true");
        setErrorMessage(false);
        props.setLoginStatus(true);
      }
    });
  };

  return (
    <React.Fragment>
      <Card css={cardStyle}>
        <CardActionArea css={cardActionColumnFlexBox}>
          <CardContent>
            <TextField
              id="outlined-basic"
              label="User Name"
              variant="outlined"
              onChange={onUserNameEntered}
            />
          </CardContent>
          <CardContent>
            <TextField
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              onChange={onPasswordEntered}
            />
          </CardContent>
        </CardActionArea>

        {errorMessage && (
          <Typography color="error" gutterBottom variant="caption" component="p">
            Invalid Credentials
          </Typography>
        )}
        <CardActions css={NoPadding}>
          <Button variant="contained" color="primary" onClick={onLoginClick}>
            Login
          </Button>
        </CardActions>
      </Card>
      <CircularProgress />
    </React.Fragment>
  );
};

export const Login = connect(null, { setLoginStatus })(LoginUnwrapped);