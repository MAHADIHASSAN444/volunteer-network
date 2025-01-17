import React, { useContext } from 'react';
import {UserContext} from '../../App';
import './Login.css';
import logo from '../../volunteer-network-main/logos/Group 1329.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

    const [loggedInUser, setLoggedInUser]= useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || {from: {pathname: "/"}};
    if (firebase.apps.length ===0){
        firebase.initializeApp(firebaseConfig);
    }

   

    const handleGoogleSignIn= () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName,email}=result.user;
            const signedInUser ={name:displayName,email}
            setLoggedInUser(signedInUser);
            history.replace(from);
          
          }).catch(function(error) {
            // var errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
         
          });

    }


    return (
        <div className=" container volunteer-login">
            <a href="/home"><img src={logo} alt="" className="form-logo"/> </a>
            <div className="login-form bg-white">

                <div className="mt-5">
                    <h3>Login with</h3>
                    <button onClick={handleGoogleSignIn}  type="submit" className="btn btn-outline-success col-md-12"> continue With Google

                    </button>
                    <p className="mt-3">don't have a account?
                        <a href="#"> Create an account</a>
                     </p>


                </div>

            </div>
        
        </div>
    );
};

export default Login;