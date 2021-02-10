import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input} from "reactstrap";
import "../App.css";
import Profile from './Profile'
const Signin=({onChange,signedIn, email,password, onSigninSubmit,onRouteChange})=> {


  return (
      <Form className="login-form" onSubmit={onSigninSubmit}>
        <div className="formgroup-box">
          <FormGroup>
            <Label htmlFor="email" hidden>
              Email
            </Label>

            <Input
              className="p-4 rounded"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              bsSize="sm"
             value={email}
              onChange={onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password" hidden>
              Password
            </Label>

            <Input
              className="p-4 rounded"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              bsSize="sm"
           value={password}
              onChange={onChange}
            />
          </FormGroup>

          <Button className="btn-primary btn-lg btn-block primaryBtn" onClick={()=>onRouteChange('profile')}>
            Login
          </Button>
          <p className="text-center p-4">
            <a href="#" onClick={()=>onRouteChange('reset')}>Forgot Password?</a>
          </p>
          <hr />
          <Button className="btn-success btn-lg btn-block w-75 mx-auto createBtn" onClick={()=>onRouteChange('register')}>
            Create New Account
          </Button>
        </div>
      </Form>
    );
  }


export default Signin;
