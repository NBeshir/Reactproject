import React, { Component,useState } from "react";
import Signin from "./Signin";
import {
 Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
NavbarText
} from 'reactstrap';

//class Navigation extends Component {
  const Navigation = ({onChange, signin}) => {
   
    return (
      <div className="text-center">
      <h1>Welcome to Friends Connect</h1>
      </div>
    );
  }
  
export default Navigation;
