import React, { useRef } from 'react'
import { auth } from '../firebase'
import './signup.css'

function Signup() {
    const emailRef = useRef(null)
    const password = useRef(null)

    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            password.current.value,
        ).then((authUser) => {
            console.log(authUser)
        }).catch ((err) => {
            alert(err.message)
        })
    }

    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            password.current.value,
        ).then((authUser) => {
            console.log(authUser)
        }).catch((err) => {
            alert(err.message)
        })
    }
    return (
        <div className="signup">
            <form>
                <h1>Sign in</h1>
                <input ref={emailRef} placeholder="Alamat Email" type="email"/>
                <input ref={password} placeholder="password" type="password"/>
                <button onClick={signIn} type="submit">Sign in</button>
                <h4>
                    <span className="signup_text">New to Netflix?</span>
                    <span onClick={register} className="signup_link"> Sign up now.</span>
                </h4>
            </form>
            
        </div>
    )
}

export default Signup
