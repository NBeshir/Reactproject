import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
  Container,
} from "reactstrap";
import "../App.css";

class Register extends Component{
  
render(){
  return (
      <Form className="login-form" onSubmit={this.props.registerUser}>
        <div className="formgroup-box">
        <FormGroup>
        <Label for="name" hidden>
          Name
        </Label>

        <Input
          className="p-4 rounded"
          type="name"
          name="name"
          id="name"
          placeholder="Name"
          bsSize="sm"
         value={this.props.name}
          onChange={this.props.onChange}
        />
      </FormGroup>
          <FormGroup>
            <Label for="email" hidden>
              Email
            </Label>

            <Input
              className="p-4 rounded"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              bsSize="sm"
             value={this.props.email}
              onChange={this.props.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password" hidden>
              Password
            </Label>

            <Input
              className="p-4 rounded"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              bsSize="sm"
           value={this.props.password}
              onChange={this.props.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="cpassword" hidden>
             Confirm Password
            </Label>

            <Input
              className="p-4 rounded"
              type="password"
              name="cpassword"
              id="cpassword"
              placeholder="Confirm Password"
              bsSize="sm"
           value={this.props.confirmPassword}
              onChange={this.props.onChange}
            />
          </FormGroup>

          <Button className="btn-primary btn-lg btn-block primaryBtn" onClick={()=>this.props.routeChange('signin')}>
          Register
          </Button>
         
         
          
        </div>
      </Form>
    );
  }

}
export default Register;
