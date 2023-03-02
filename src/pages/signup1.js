import React from "react";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col, Button } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import axios from "axios";
import { useRef } from 'react';
import database from './firebase.js';
import { getDatabase, ref, set } from "firebase/database";

/*
This Signup code contains only character limit as password policy
*/



var user = 0;
export default function SignUp() {
    
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log("IM HERE")
        
        if (checkIfValid(data.password) == true){
            user = user + 1
            //alert("Successfully Signed up!");
            database.ref("user"+ user).set({
                username : username,
                password : password,
              }).catch((error) => {
                      console.log(error)
                  })

        console.log(JSON.stringify(data));
        }
        
    };

    //check if password valid
    const checkIfValid = password => {
        //password more than 10 cherecters 
        /*
        if (password.length < 10) {
          alert("Password must be at least 10 characters long");
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
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/> 
            <small id="passwordHelp" className="form-text text-muted">Your password must be 10 charecters long.</small>
            </div>

            <button onClick={onSubmit} type="button" className="btn btn-primary">Sign Up</button>
            </form>
    </body>
    )
}