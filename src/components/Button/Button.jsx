import React from "react";
import { Button as MuiButton } from "@mui/material";
// import { ContainedButton } from '@mui/material';

function Button({ type, text, variant }) {
  return (
    <MuiButton type={type} variant="contained">
      {text}
    </MuiButton>
  );
}

export default Button;
