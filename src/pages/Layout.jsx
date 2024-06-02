

  // import logo from '../assets/img/logo.png';
  import { Outlet, Link } from "react-router-dom";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faHome, faShoppingCart, faInfo, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';



  const Layout = () => {
    return (
      <>
        <div style={sidebarStyle}>
          <ul style={listStyle}>
            {/* <img src={logo} className="logo"/> */}
            <li style={itemStyle}>
              <Link to="/" style={linkStyle}  className='mt-5'>
                <FontAwesomeIcon icon={faHome} style={iconStyle} /> Dashboard
              </Link>
            </li>
            <hr></hr>
            <li style={itemStyle}  className='mt-4'>
              <Link to="/shop" style={linkStyle}>
                <FontAwesomeIcon icon={faShoppingCart} style={iconStyle} /> Products
              </Link>
            </li>
            <hr></hr>
            <li style={itemStyle}  className='mt-4'>
              <Link to="/order" style={linkStyle}>
                <FontAwesomeIcon icon={faShoppingCart} style={iconStyle} /> Orders
              </Link>
            </li>
            <hr></hr>
            <li style={itemStyle}  className='mt-4'>
              <Link to="/about" style={linkStyle}>
                <FontAwesomeIcon icon={faInfo} style={iconStyle} /> Payments
              </Link> 
            </li>
            <hr></hr>
            <li style={itemStyle}  className='mt-5'>
              <Link to="/login" style={linkStyle}>
                <FontAwesomeIcon icon={faSignOutAlt} style={iconStyle} /> Logout
              </Link>
            </li>
          </ul>
        </div>

        {/* This Outlet is the place in which react-router
        will render your components that you need with the navbar */}
        <div style={contentStyle}>
          <Outlet />
        </div>
      </>
    );
  };

  const sidebarStyle = {
    backgroundColor: "#f5f5f5",
    width: "270px",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1,
    padding: "10px",
  };

  const contentStyle = {
    marginLeft: "220px", // Adjust the value based on your sidebar width
    padding: "10px",
    backgroundImage: "url('assets/img/background.jpg')", // Replace with the path to your image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",

    
  };

  const listStyle = {
    listStyle: "none",
    margin: "0",
    padding: "0",
    marginLeft: "3px",
  };

  const itemStyle = {
    margin: "10px 0",
  };

  const linkStyle = {
    color: "#333",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  };

  const iconStyle = {
    marginRight: "8px",
  };

  export default Layout;


