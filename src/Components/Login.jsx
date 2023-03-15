import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useFormInputValidation } from 'react-form-input-validation';

const Login = () => {
    //var[mail,setmail]=useState();
    //const mailclick=(e)=>{
    //setmail(mail=(e.target.value))
    //console.log(mail)
    
//}
const [fields,errors,form]=useFormInputValidation({
    email_address:"",
    password:""
},{
    email_address:"required|email",
    password:'required'
})
  return (
    <div>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
         value={fields.email_address}
         onBlur={form.handleBlurEvent}
         onChange={form.handleChangeEvent}
          name='email_address'
          id="outlined-error"
          label="email"
          helperText={errors.email_address?errors.email_address:""}
    
        />
        <br/>
        <TextField
        value={fields.password}
        onBlur={form.handleBlurEvent}
        onChange={form.handleChangeEvent}
        name='password'
          id="outlined-error-helper-text"
          label="password"
          defaultValue=""
          helperText={errors.password?errors.password:""}
          type='password'
        />
      </div>
      <div>
        
      </div>
    </Box>
 
    </div>
  )
}

export default Login
