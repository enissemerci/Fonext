import React, { useState } from "react";
import { Nav, Offcanvas } from "react-bootstrap";
import foto from "../assets/Volkan.jpeg";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaLinkedin,
  FaCar,
  FaBars,
} from "react-icons/fa";
import PieChartComponent from "../components/Charts/PieChart";

export const SideBarRight = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="ms-auto">
      <button className="btn btn-primary" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <Offcanvas show={showSidebar} onHide={toggleSidebar} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav defaultActiveKey="/" className="flex-column text-center">
            <Nav.Item href="/">
              <img
                src={foto}
                className="rounded-pill me-3 border border-dark p-1"
                alt=""
                style={{ width: "100px", height: "100px" }}
              />
            </Nav.Item>
            <Nav.Item className="fs-4 mt-4">Volkan Demirel</Nav.Item>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Nav.Item className="text-start fs-5">Hakkında</Nav.Item>
            <Nav.Item
              className="text-start text-secondary"
              eventkey="disabled"
              disabled
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              accusantium voluptatibus non dolorem itaque sit temporibus, sed
              nulla exercitationem rem cum delectus quia obcaecati debitis
              labore corrupti impedit recusandae incidunt?
            </Nav.Item>
            <Nav.Item className="text-start fs-5 mt-5">Hesaplar</Nav.Item>
            <Nav.Link className="text-start fs-5  ms-2">
              <FaTwitter /> Twitter
            </Nav.Link>
            <Nav.Link
              className="text-start fs-5  ms-2"
              style={{ color: "red" }}
            >
              <FaYoutube /> Youtube
            </Nav.Link>
            <Nav.Link className="text-start fs-5  ms-2">
              <FaFacebook /> Facebook
            </Nav.Link>
            <Nav.Link
              className="text-start fs-5  ms-2"
              style={{ color: "black" }}
            >
              <FaTiktok /> FaTiktok
            </Nav.Link>
            <Nav.Link className="text-start fs-5 ms-2">
              <FaLinkedin /> Linkedin{" "}
            </Nav.Link>
          </Nav>
          <PieChartComponent />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
