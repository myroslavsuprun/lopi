import React from 'react';
import { FormControl, Input, FormHelperText, InputLabel } from '@mui/material';


function FormInput({type,id, label,cont,change, helperText='', helperDescribe=''}) {
    
  return (
    <FormControl style={{ dispay: 'block',  }}  fullWidth variant="standard"> 
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Input margin="dense"  type={type} id={id} aria-describedby={helperDescribe.length > 0 ? helperDescribe : ''}  value={cont}  onChange={e => change(e.target.value)} />
        {helperText.length > 0 && helperDescribe.length > 0 && <FormHelperText id={helperDescribe}>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default FormInput