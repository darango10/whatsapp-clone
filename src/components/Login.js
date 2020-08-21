import React from 'react';
import '../styles/login.css'
import Button from "@material-ui/core/Button";
import {auth, provider} from "../firebase";
import {useStateValue} from "../StateProvider";
import {actionTypes} from "../reducer";

const Login = () => {

    const [{user}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                payload: result.user
            })
        }).catch((err) => {
            alert(err.message)
        })
    }

    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="whatsapp"/>
                <div className="login__text">
                    <h1>Sign in to Whastapp</h1>
                </div>

                <Button onClick={signIn}>
                    Sign In with Google
                </Button>
            </div>
        </div>
    );
};

export default Login;
