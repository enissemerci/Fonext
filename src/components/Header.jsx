import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaPlus, FaBars } from "react-icons/fa";
import "../App.css";
import logo from "../assets/FoNext.jpeg";
import { useState } from "react";
import { SideBarRight } from "./SideBarRight";

export const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  return (
    <>
      <Navbar expand="lg" className="bg-white shadow">
        <Container>
          <Navbar.Brand
            href="/"
            className="text-primary fs-1 d-flex align-items-center"
          >
            <img
              src={logo}
              className="rounded-pill me-3"
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
            <span>Fonext Social</span>
          </Navbar.Brand>
          <Nav className="ms-auto" variant="pills" activeKey="1">
            <Nav.Item className="rounded-pills fs-5">
              <Nav.Link
                className="text-white ps-1"
                eventKey="1"
                href="/NewContent"
              >
                <FaPlus className="" />
                Yeni İçerik Oluştur
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <SideBarRight />
        </Container>
      </Navbar>
    </>
  );
};
