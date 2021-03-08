import React, { useState } from 'react'
import Signup from './Signup'
import './login.css'


function Login() {
    const [signIn, setSignIn] = useState(false)
    return (
        <div className="login">
            <div className="login_background">
                <img className="login_img" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="login"/>
                <button className="login_button" onClick={() => setSignIn(true)}>
                    Sign in
                </button>
                <div className="gradient"/>
                <div className="login_body">
                    {signIn ? (
                        <Signup/>
                    ) : (
                        <>
                        <h1>Unlimited films, TV Shows, Programmes and more.</h1>
                        <h2>Watch anywhere. Cancel anytime</h2>
                        <h3>Ready to watch? Enter your email to create or restart your
                        membership.</h3>
                        <div className="login_input">
                            <form>
                            <input placeholder="Alamat email" type="email"/>
                            <button onClick={() => setSignIn(true)} className="login_signup">Get started</button>
                            </form>
                        </div>
                        </>
                    )}
                    
                </div>
            </div>
            
        </div>
    )
}

export default Login
