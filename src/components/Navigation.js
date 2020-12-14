import React, { Component } from "react";

import { Navbar, Nav } from "react-bootstrap";

export class Navigation extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Vehicles</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/makes">Makes</Nav.Link>
          <Nav.Link href="/models">Models</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
