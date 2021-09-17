import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  background: #c1a6ffbc;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AppTitle = styled.h1`
  text-align: center;
  font-weight: 700;
  flex: 1;
  font-size: 45px;
`;

const NavLinks = styled.div`
  padding-right: 20px;
  display: flex;
  gap: 10px;
`;

const Navbar = () => {
  return (
    <Nav>
      <AppTitle>Car Search</AppTitle>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
