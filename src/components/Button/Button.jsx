import React from "react";
import { Button as MuiButton } from "@mui/material";
// import { ContainedButton } from '@mui/material';

function Button({ type, text, variant, disabled = false }) {
  return (
    <MuiButton
      margin="auto"
      disabled={disabled}
      type={type}
      variant="contained"
    >
      {text}
    </MuiButton>
  );
}

export default Button;
