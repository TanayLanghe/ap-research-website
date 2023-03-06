import React, { useId } from "react";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import database from './firebase.js';
import { useNavigate } from "react-router-dom";
/*
This Signup code contains only character limit as password policy
*/
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}




export default function SignUp() {

    //var newUrl = "https://docs.google.com/forms/d/e/1FAIpQLScQQz8wFpdVJyWNdGc1La1iXKOR438xRl2SAyfqsV1EGo58dQ/viewform?usp=sf_link";
    var user = generateString(20);
    
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    //const website1 = database.ref('Website1/');

    const onSubmit = data => {
        if (checkIfValid(data.password) == true){
            database.ref('Website1/'+user).set({
                username : username,
                password : password,
                
              }).catch((error) => {
                      console.log(error)
                  })

        console.log(JSON.stringify(data));
        window.location.href = "http://www.w3schools.com";
        return false;
        }
        
    };

    //check if password valid
    const checkIfValid = password => {
        //password more than 10 cherecters 
        /*
        if (!password) {
            console.log(password +" After")
          alert("Please enter a password");
          return false;
        } 
        
        //password contains number
        if (/[0-9]/.test(password) !== true){
            alert("Password must be contain a number");
            return false
        }

        //password has letter a
        if (/[a]/.test(password) !== true) {
            alert("Password must contain the letter A");
            return false
        }
        */
        return true;
    }



    return (
        <body>
        <div style={{ backgroundColor: "#63b8c7", paddingTop: "0.3%", paddingBottom: "0.3%", paddingLeft: "1%", margin: "0" }}> </div>
            <h1>Exploratory</h1>
        <form onSubmit={onSubmit}>
            <div className="form-group">
            <label>Username</label>
            <input value={username} onChange={(e) => setUserName(e.target.value)} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter username"/>
            </div>

            <div className="form-group">
            <label>Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" /> 
            <small id="passwordHelp" className="form-text text-muted">Your password must be 10 charecters long.</small>
            </div>
            <button onClick={onSubmit} type="button" className="btn btn-primary">Sign Up</button>
            </form>
    </body>
    )
}