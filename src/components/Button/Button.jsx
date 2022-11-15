import React from "react";
import { Button as MuiButton } from "@mui/material";
// import { ContainedButton } from '@mui/material';

function Button({ type, text, variant, disabled }) {
  return (
    <MuiButton disabled={disabled} type={type} variant="contained">
      {text}
    </MuiButton>
  );
}

export default Button;
