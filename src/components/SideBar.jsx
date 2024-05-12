import React from "react";
import { Nav } from "react-bootstrap";
import { FaHome,FaChartLine,FaCalendarAlt,FaImages,FaCog } from 'react-icons/fa';
import "../App.css"
export const SideBar = () => {
  return (
    <div className="sideBar">
      <Nav defaultActiveKey="/home" className="flex-column pt">
        <Nav.Link className="py-2 px-4 fs-2 " href="/home"><FaHome className="me-2"/>Ana Sayfa</Nav.Link>
        <Nav.Link className="py-2 px-4 fs-2 " href="/istatistik"><FaChartLine/> İstatistik</Nav.Link>
        <Nav.Link className="py-2 px-4 fs-2 " href="/takvim"><FaCalendarAlt/> Takvim</Nav.Link>
        <Nav.Link className="py-2 px-4 fs-2 " href="/medya"><FaImages/> Medya</Nav.Link>
        <Nav.Link className="py-2 px-4 fs-2 " href="/ayarlar"><FaCog/> Ayarlar</Nav.Link>
      </Nav>
    </div>
  );
};
