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
        imageUrl="https://pbs.twimg.com/media/GM07sjzWAAAPU1R?format=jpg&name=large"
        name="One Piece"
        description="Comic Adaptation"
      />
      <Product
        imageUrl="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/01/scream-character-guide.jpg"
        name="Scream"
        description="Horror"
      />
      <Product
        imageUrl="https://cdn.vox-cdn.com/thumbor/A4IYRwrVAQmgrg2vFlnh5XtxJjY=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24422715/Titanic25th_NonFeat_ParamountPictures_Ringer.jpg"
        name="Titanic"
        description="Tragic Drama"
      />
      <Product
        imageUrl="https://goggler.my/wp-content/uploads/2019/12/JM2_INTL_30Sht_BRIDGE_03-e1575889045252.jpg"
        name="Jumanji"
        description="Action"
      />
      <Product
        imageUrl="https://img.artpal.com/610421/5-19-7-1-16-56-24m.jpg"
        name="Reversion"
        description="Action"
      />
      <Product
        imageUrl="https://i.guim.co.uk/img/media/b2cf68a6a2ddb55449a856098ad32b2204ae3cde/0_0_4904_3688/master/4904.jpg?width=700&quality=85&auto=format&fit=max&s=5c172b59350a2f89360c82d8dbfd156c"
        name="Brooklyn"
        description="Heavy Drama"
      />
      <Product
        imageUrl="https://anniehaydesign.weebly.com/uploads/9/5/4/6/95469676/landscape-poster-2_orig.jpg"
        name="Gravity"
        description="Fantasy"
      />
      <Product
        imageUrl="https://lh6.googleusercontent.com/B0uQRPzgf2AX6EVvlqNWwV7ql2-TbAuWbJcnkHuC_uzEtG0viA6__4_v-bfdas4iM8MqIm8wcoDeaLRxugVFycbVvaelnagmzAsH9-ug-y0X2BxvEjFfhavM_fvWHDEnNKBFamG9=s0"
        name="Oblivion"
        description="Action"
      />
      <Product
        imageUrl="https://i0.wp.com/lostinmovies.co.uk/wp-content/uploads/2020/05/rwdkbjliyqn8kcqxajh9szmwgzo.jpg?resize=1038%2C576&ssl=1"
        name="Inception"
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
