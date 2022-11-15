import React, { useEffect, useState } from "react";
import {
  FormControl,
  // Input,
  TextField,
  FormHelperText,
  InputLabel,
} from "@mui/material";

function FormInput({
  type,
  id,
  label,
  inputValue,
  change,
  helperText = "",
  helperDescribe = "",
  validation,
}) {
  const [error, setError] = useState(false);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    validation(false);
    if (!error && focus) {
      validation(true);
    }
  }, [error, focus, validation]);

  const validate = (val, type) => {
    change(val);

    if (type === "email" && val.length > 0) {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(String(inputValue).toLowerCase())) {
        setError(false);
      } else {
        setError(true);
      }
    } else if (type === "password" && val.length > 0) {
      setError(true);
      let pass_ver_len = false;
      if (val.length >= 8 && val.length <= 16) {
        pass_ver_len = true;
      }

      let pass_ver_cap = false;
      if (val.match(/[A-Z]/g)) {
        pass_ver_cap = true;
      }

      let pass_ver_low = false;
      if (val.match(/[a-z]/g)) {
        pass_ver_low = true;
      }

      let pass_ver_nums = false;
      if (val.match(/[0-9]/g)) {
        pass_ver_nums = true;
      }

      if (pass_ver_len && pass_ver_cap && pass_ver_low && pass_ver_nums)
        setError(false);
    } else {
      setError(true);
    }
  };
  const focusInput = () => {
    if (!focus) {
      setFocus(true);
      setError(true);
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={id}>{label}</InputLabel>

      <TextField
        margin="dense"
        error={error}
        variant="filled"
        color={
          !error && focus ? "success" : error && focus ? "error" : "primary"
        }
        type={type}
        id={id}
        aria-describedby={helperDescribe.length > 0 ? helperDescribe : ""}
        value={inputValue}
        onChange={(e) => validate(e.target.value, type)}
        onFocus={focusInput}
      />

      {helperText.length > 0 && helperDescribe.length > 0 && (
        <FormHelperText id={helperDescribe}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
}

export default FormInput;
