import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="container my-5">
            <div className=" row col-md-6 offset-3">
                <h2 className="text-center">Login</h2>
                <button  className="btn-regular my-5" onClick={handleGoogleLogin}>Login with Google</button>
            </div>


        </div>
    );
};

export default Login;