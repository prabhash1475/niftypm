import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Container, Box } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/layout'
// import style from '../Styles/Navbar.module.css'
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { Heading,Divider } from '@chakra-ui/react'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [flag, setFlag] = useState(false)

    let navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        let Emailog = JSON.parse(localStorage.getItem("Email"))
        let Pass = JSON.parse(localStorage.getItem("Password"))

        if (!email || !password) {
            alert("Fill All Fields")
        }
        else if (Pass == password && Emailog == email) {
            alert("Login Successfull")
            navigate("/")
        }
        else {
            alert("Invalid Email or Password")
        }
    }
    return (
        <>
        <Box  backgroundImage="url('https://nifty.pm/static/media/waves-large@2x.0f45956af565d8c3dea9.png')"
         backgroundPosition="center"
        backgroundRepeat="no-repeat" >

       
        <Container  >
            <Box >
                <Box h='20rem' w='25rem'>
                    <FormControl onSubmit={handleLogin}>
                        <Heading as='h3' size='lg' pt={"16"} textAlign= "left">Log in to your account</Heading>
                        <br />
                        <br />
                        <FormLabel>Email</FormLabel>
                        <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <FormLabel>Password</FormLabel>
                        <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <br />
                        <br />
                        <br />
                        <Button color={"white"} bg={"#59bbac"} w='25rem' onClick={handleLogin}>Log in</Button>

                    </FormControl>
                    <br />
                  
                <Button color={"orange"} w='25rem'><FcGoogle/> Sign in with Google</Button>
                <br />
                <br />
                
                <Button w='25rem'>Sign in with SSO</Button>
                <Divider/>
                <Text mt={"20px"}>Don’t have an account?</Text>
               <Link to='/signup'> <Button color={"orange"} mt={"20px"}>Sign up for free</Button></Link>
                </Box>
                <Box>
                </Box>
            </Box>
        </Container>

        </Box>
        </>

    )
}

export default Login