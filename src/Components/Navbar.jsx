import { AppBar, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <AppBar position='static'>
        <toolbar>
            <Typography variant='h6' components='div' sx={{ flexGrow: 1}}>
                <h2>homepage</h2>
                <Button color='inherit' ><Link to='/' style={{color:'white',textDecoration:'none',backgroundColor:'none'}}>Login</Link></Button>
                <Button color='inherit' ><Link to='/signup'style={{color:'white',textDecoration:'none',backgroundColor:'none'}} >Signup</Link></Button>
                <Button color='inherit' ><Link to='contact'style={{color:'white',textDecoration:'none',backgroundColor:'none'}}  >contact</Link></Button>
            </Typography>
        </toolbar>
        </AppBar> 
    </div>
  )
}

export default Navbar
