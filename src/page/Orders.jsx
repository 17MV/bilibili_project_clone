import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCat, faBasketShopping, faMoneyBill1Wave, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/img/logo1.png';

const Dashboard = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#F5F5F5';

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  const Product = (props) => {
    const { name, price, description, imageUrl } = props;

    const pStyle = {
      textAlign: 'center',
      color: 'black',
      fontSize: '15px',
      fontWeight: 'bold'
    };

    const productContainerStyle = {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap',
      maxWidth: '100px',
      margin: 'auto'
    };

    const imgStyle = {
      width: '300px',
      height: '200px',
      objectFit: 'cover', // Ensure the image covers the entire container
      borderRadius: '10px', // Rounded corners
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' // Add shadow for a raised effect
    };

    const descriptionStyle = {
      textAlign: 'center',
      color: 'grey',
      fontSize: '14px',
      marginTop: '10px'
    };

    return (
      <>
        <div style={{ display: 'inline-block', margin: '0 1rem', marginLeft: '0rem' }}>
          <div style={{
            width: '280px',
            height: '200px',
            overflow: 'hidden',
            position: 'relative',
            borderRadius: '0.5%', // Adjust the border-radius to control squircle shape
            border: '1px solid white', // Optional border
          }}>
            <img src={imageUrl} alt={name} width="100%" height="100%" style={{ objectFit: 'cover', borderRadius: '5%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
          </div>
          <p style={pStyle}>{name}</p>
          <p style={descriptionStyle}>{description}</p>
        </div>
      </>
    );
  };

  return (
    <>
      <Product
        imageUrl="https://i.pinimg.com/736x/85/17/94/8517945125374dfddcc6161fb3f4a847.jpg"
        name="Suriya"
        description="Comic Adaptation"
      />
      <Product
        imageUrl="https://www.scrolldroll.com/wp-content/uploads/2023/03/shazam-hollywood-movies-releasing-in-march-2023-750x430.jpg"
        name="Shazam"
        description="Action"
      />
      <Product
        imageUrl="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQYtqRx1vqfBNswh9XMVt9EMDosm0qvbG8pq0YjrSskz1R3XoGka7M2HkRbwM_46ZEiIEaKuQFPEJw_wYHCKt4y9FX1tBiXfB6OOJ48Lft_l9bzoRoxe1TarU43fUx5jxU_ulVGzcmHLzsdxAqr4SAZVH.jpg?r=5a3"
        name="Witcher"
        description="Horror"
      />
      <Product
        imageUrl="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQQfOsR0K18MIk5cTHlG_dfUvcldznxYKAlA9JhT0yH6UUt5-4-hXTW3zqc912COBYs_Dpy3dQ2jsAWw7rtwU0ewZxc41VJ-nUdoxoyomCZJ7aT7-_bsK1u3jVTY1jnbS_Pdz0iwqANrJUrVqEm43q0aT.jpg?r=f09"
        name="Tudum"
        description="Action"
      />
      <Product
        imageUrl="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABQlthKQ7xN7JTSjhpydpeNfvGG3prqfPszaeK0SJvTEfLnoH2J9-8E4S5aPAhDvr6xyUDYtyLGKDwwzAPOPVDFT1JGJyQ1d3o2uQ.jpg?r=f27"
        name="Heart Stone"
        description="Action"
      />
      <Product
        imageUrl="https://ntvb.tmsimg.com/assets/p23903924_v_h10_aa.jpg?w=1280&h=720"
        name="The Killer"
        description="CAction"
      />
      <Product
        imageUrl="https://www.indiewire.com/wp-content/uploads/2024/01/MCDJOWI_EC032.jpg?w=600&h=337&crop=1"
        name="Damsel"
        description="Comic Adaptation"
      />
      <Product
        imageUrl="https://readysteadycut.com/wp-content/uploads/2023/01/AAAABap0CO7quN_RXB-NcPv2el_bZrq0zrlTJTUTQNN3E_8KaIrg3vDd7zktuzoIQIKS8iiJkwGFDJWFV73pp0-l_dD7J8waxg-ootvW.jpeg"
        name="Blue Eye"
        description="Action"
      />
      <Product
        imageUrl="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/11/best-of-2023-netflix-movies-they-cloned-tyrone.jpg"
        name="Game Rant"
        description="Action"
      />
    </>
  );
};

export default Dashboard;

const cardStyle = {
  display: 'flex',
  height: '13rem',
  fontSize: "14px",
  padding: "10px",
  position: "fixed",
  top: 150,
  left: 0,
  right: 0,
  zIndex: 1,
  marginLeft: "250px",
};

const itemStyle2 = {
  display: 'flex',
  height: '13rem',
  fontSize: "14px",
  padding: "25px",
  position: "fixed",
  top: 500,
  left: 0,
  right: 0,
  zIndex: 1,
  marginLeft: "250px",
};

const imageURL = {
  display: 'flex',
  justifyContent: 'start',
  padding: "10px",
  position: "fixed",
  top: 80,
  left: 0,
  right: 0,
  marginLeft: "250px",
  color: '#808080',
};

const pStyle2 = {
  display: 'flex',
  justifyContent: 'start',
  padding: "10px",
  position: "fixed",
  top: 440,
  left: 0,
  right: 0,
  marginLeft: "100px",
  color: '#808080',
};
