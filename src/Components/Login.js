import React from 'react'
import '../Components/Login.css'
import { loginUrl } from '../spotify.js'

function Login() {
    return (
        <div className="login">
            <h1>login page</h1>
            <img src="https://developer.spotify.com/assets/FBImage.png" alt="banner"/>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
