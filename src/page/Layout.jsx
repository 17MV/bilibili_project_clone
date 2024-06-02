import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../assets/img/logo1.png';
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faLayerGroup, faFileInvoiceDollar, faCircleUser, faSearch, faVideo, faClock, faHeart, faBars, faFire, faThList } from '@fortawesome/free-solid-svg-icons'; // Added faThList

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div style={isSidebarOpen ? sidebarStyle : sidebarStyleClosed}>
        <ul style={listStyle}>
          <li style={logoContainerStyle}>
            <button onClick={toggleSidebar} style={hamburgerButtonStyle}>
              <FontAwesomeIcon icon={faBars} />
            </button>
            <img src={logo} className="logo" alt="Logo" style={{ height: '85%' }} />
          </li>
          <li style={pStyle}>
            <p></p>
          </li>
          <hr style={{ borderColor: 'white' }} />
          <li style={itemStyle}>
            <Link to="/dashboard" style={linkStyle} className='mt-1'>
              <FontAwesomeIcon icon={faHome} style={iconStyle} /> Home
            </Link>
          </li>
          <hr style={{ borderColor: 'white' }} />
          <li style={itemStyle} className='mt-1'>
            <Link to="/products" style={linkStyle}>
              <FontAwesomeIcon icon={faLayerGroup} style={iconStyle} /> Anime
            </Link>
          </li>
          <hr style={{ borderColor: 'white' }} />
          <li style={itemStyle} className='mt-1'>
            <Link to="/orders" style={linkStyle}>
              <FontAwesomeIcon icon={faFire} style={iconStyle} /> Trending
            </Link>
          </li>
          <hr style={{ borderColor: 'white' }} />
          <li style={itemStyle} className='mt-3'>
            <Link to="/payments" style={linkStyle}>
              <FontAwesomeIcon icon={faThList} style={iconStyle} /> Category {/* Changed icon to faThList */}
            </Link>
          </li>
          <hr style={{ borderColor: 'white' }} />
          {/* New text links below the Category button */}
          <li style={textLinkStyle} className='mt-3'>
            About Us
          </li>
          <li style={textLinkStyle}>
            Contact Us
          </li>
          <li style={textLinkStyle}>
            Get App
          </li>
          <li style={textLinkStyle}>
            Terms of Service
          </li>
          <li style={textLinkStyle}>
            Privacy Policy
          </li>
          <li style={textLinkStyle}>
            Advertising Policy
          </li>
          <li style={textLinkStyle}>
            Punishment Rules for Video Violations
          </li>
          <li style={textLinkStyle}>
            Punishment Rules for Account Violations
          </li>
          <li style={textLinkStyle}>
            Infringement Complaint
          </li>
          {/* End of new text links */}
        </ul>
      </div>
      <div style={isSidebarOpen ? contentStyle : contentStyleClosed}>
        <div style={searchBarContainerStyle}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Search..."
              style={searchBarStyle}
            />
            <div style={iconContainerStyle}>
              <FontAwesomeIcon icon={faSearch} style={{ ...iconStyleWithBorder, fontSize: '24px' }} />
              <FontAwesomeIcon icon={faVideo} style={{ ...iconStyleWithBorder, fontSize: '24px' }} />
              <FontAwesomeIcon icon={faClock} style={{ ...iconStyleWithBorder, fontSize: '24px' }} />
              <FontAwesomeIcon icon={faHeart} style={{ ...iconStyleWithBorder, fontSize: '24px' }} />
              <button style={smallButtonStyle}>App</button>
              <button style={{ ...smallButtonStyle, backgroundColor: 'red' }}>Premium</button> {/* Change color to red */}
            </div>
          </div>
          <div style={profileStyle}>
            <Dropdown>
              <Dropdown.Toggle variant="white" id="dropdown-basic" style={{ color: 'black' }}>
                <FontAwesomeIcon icon={faCircleUser} size="xl" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/profile" style={{ color: 'black' }}>Profile</Dropdown.Item>
                <Dropdown.Item href="/login" style={{ color: 'black' }}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div style={buttonContainerStyle}>
          <button style={textButtonStyle}>Anime</button>
          <button style={textButtonStyle}>Trending</button>
          <button style={textButtonStyle}>FRI</button>
          <button style={textButtonStyle}>SAT</button>
          <button style={textButtonStyle}>SUN</button>
          <button style={textButtonStyle}>MON</button>
          <button style={textButtonStyle}>TUE</button>
          <button style={textButtonStyle}>WED</button>
          <button style={textButtonStyle}>THU</button>
        </div>
        <Outlet />
      </div>
    </>
  );
};

const sidebarStyle = {
  backgroundColor: "white",
  width: "275px",
  height: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1,
  padding: "10px",
  color: 'black',
  fontSize: "14px",
  transition: "width 0.3s",
};

const sidebarStyleClosed = {
  ...sidebarStyle,
  width: "60px",
  overflow: "hidden",
};

const contentStyle = {
  marginLeft: "250px",
  padding: "10px",
  color: 'black',
  transition: "margin-left 0.3s",
};

const contentStyleClosed = {
  ...contentStyle,
  marginLeft: "60px",
};

const logoContainerStyle = {
  display: 'flex',
  justifyContent: 'flex-start', // Changed from 'space-between' to 'flex-start'
  alignItems: 'center',
  marginBottom: '20px',
  height: '100px',
};

const pStyle = {
  display: 'flex',
  justifyContent: 'center',
  color: 'black',
};

const listStyle = {
  listStyle: "none",
  margin: "0",
  padding: "0",
};

const itemStyle = {
  margin: "10px 0",
  color: 'black',
};

const linkStyle = {
  fontSize: 20,
  display: "flex",
  alignItems: "center",
  color: 'black',
  textDecoration: 'none',
};

const textLinkStyle = {
  fontSize: 14,
  color: 'black',
  cursor: 'pointer',
};

const iconStyle = {
  marginRight: "8px",
  color: 'black',
};

const searchBarContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  backgroundColor: 'white',
  position: 'sticky',
  top: 0,
  zIndex: 1,
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  color: 'black',
};

const searchBarStyle = {
  padding: '10px',
  fontSize: '16px',
  borderRadius: '20px', // Adjusted the border-radius to make it squircle
  border: '1px solid black',
  backgroundColor: 'white',
  width: '610px', // Increased the width
  color: 'black',
};

const iconContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

const iconStyleWithBorder = {
  color: 'black',
  padding: '5px',
  backgroundColor: 'white',
  cursor: 'pointer',
  fontSize: '24px',
};

const profileStyle = {
  display: 'flex',
  alignItems: 'center',
  color: 'black',
  fontSize: "14px",
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginTop: '10px',
};

const textButtonStyle = {
  padding: '8px 16px',
  fontSize: '16px',
  border: 'none',  // Removed the border property
  borderRadius: '5px',
  backgroundColor: 'white',
  color: 'black',
  cursor: 'pointer',
  textAlign: 'center',
};

const smallButtonStyle = {
  padding: '5px 10px',
  fontSize: '14px',
  border: '1px solid black',
  borderRadius: '5px',
  backgroundColor: 'white',
  color: 'black',
  cursor: 'pointer',
};

const hamburgerButtonStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '22px',
  marginRight: '5px', // Adjusted margin to 5px
  marginLeft: '0px', // Adjusted margin to 0px
  color: 'black',
};

export default Layout;
