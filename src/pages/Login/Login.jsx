import React, { useState } from "react";
import { FormInput, Button } from "components";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  let valid = emailValid && passwordValid;

  const setEmailFieldValid = (validVal) => {
    setEmailValid(validVal);
  };
  const setPasswordFieldValid = (validVal) => {
    setPasswordValid(validVal);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <Container maxWidth="xs">
      <Typography align="center" gutterBottom variant="h2">
        Login
      </Typography>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Email:"
          id="email"
          change={setEmail}
          inputValue={email}
          type="email"
          validation={setEmailFieldValid}
        />

        <FormInput
          label="Pasword:"
          id="password"
          change={setPassword}
          inputValue={password}
          type="password"
          validation={setPasswordFieldValid}
        />

        <Button
          disabled={!valid}
          type="submit"
          text="Submit"
          variant="primary"
        />
      </form>
    </Container>
  );
}

export default Login;
