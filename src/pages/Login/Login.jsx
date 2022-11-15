import React, { useState } from "react";
import { FormInput, Button } from "components";
import { Container } from "@mui/system";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={submitHandler}>
        <FormInput
          label="Email:"
          id="email"
          change={setEmail}
          cont={email}
          type="email"
        />

        <FormInput
          label="Pasword:"
          id="password"
          change={setPassword}
          cont={password}
          type="password"
        />

        <Button type="submit" text="Submit" variant="primary" />
      </form>
    </Container>
  );
}

export default Login;
