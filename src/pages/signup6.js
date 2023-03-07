import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import database from './firebase.js';
/*
This Signup code contains no password policy but instead, recomendation on what to do and what not to do
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

    var user = generateString(20);
    
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const onSubmit = data => {
        if (checkIfValid(data.password) === true){
            database.ref('Website6/'+user).set({
                username : username,
                password : password,
                
              }).catch((error) => {
                      console.log(error)
                  })
        window.location.href = "https://sites.google.com/d/1zhRR6c-qfM4WpBS1NJEaEzZ6QRPMcRl7/p/1OLBFSbv1Z3yHhq_kgbqH_CUUBZs7j4vd/edit";
        console.log(JSON.stringify(data));
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
        <div style={{ backgroundColor: "#63b8c7", paddingTop: "0.3%", paddingBottom: "0.3%", paddingLeft: "1%", margin: "0" }}> 
            <h1>Exploratory</h1>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <center><form onSubmit={onSubmit}>
            <div className="form-group">
            <label>Username</label>
            <input value={username} onChange={(e) => setUserName(e.target.value)} type="text" className="w-25 form-control"  placeholder="Enter username"/>
            </div>
            <br />
            <br />
            <div className="form-group">
            <label>Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-25 form-control" id="Password"  placeholder="Password" /> 
            <small id="passwordHelp" className="form-text text-muted">Your password must have a capital letter</small>
            </div>
            <br />
            <button onClick={onSubmit} type="button" className="btn btn-outline-primary">Sign Up</button>
        </form></center>
    </body>
    )
}