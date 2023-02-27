import React from "react";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col, Button } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { InputGroup } from "react-bootstrap";

/*
This Signup code contains only character limit as password policy
*/

const initialValues = {
    username: "",
    password: "",
};

export const listOfUsers = [];


export default function SignUp() {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        if (checkIfValid(data.password) == true){
            listOfUsers.push(data);
            
            alert("Successfully Signed up!");

            console.log("________________");
            console.log(listOfUsers);
        }

    };

    //check if password valid
    const checkIfValid = password => {
        //password more than 10 cherecters 
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
        return true;
    }



    return (
        <body>
            <div style={{ backgroundColor: "#63b8c7", paddingTop: "0.3%", paddingBottom: "0.3%", paddingLeft: "1%", margin: "0" }}>
                <h1>Exploratory2</h1>
            </div>
            <br />
            <br />
            <br />
            <div className="container">
                <h2 style={{ textAlign: "center" }}>Information</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    name="username"
                                    label="UserName"
                                    type="text"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    {...register("Username")}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" label="Password" type="password" placeholder="Password" required {...register("password")}/>
                            <Form.Control.Feedback type="invalid">
                                Please Create a Password.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <br />
                    <Row>
                        <Button type="submit" style={{ backgroundColor: "#63b8c7", float: "right" }}>
                            Sign Up
                        </Button>
                    </Row>

                </Form>
            </div>
        </body>
    )
}