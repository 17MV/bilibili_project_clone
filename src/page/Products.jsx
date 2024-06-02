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
        imageUrl="https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/UUID-cl90fn4dz578095vmqyyuvrew2b/public"
        name="Rirry"
        description="Comic Adaptation"
      />
      <Product
        imageUrl="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe"
        name="One Piece"
        description="Comic Adaptation"
      />
      <Product
        imageUrl="https://cdn.oneesports.gg/cdn-data/2023/01/Anime_SuzumenoTojimari_Movie_Poster-450x253.jpg"
        name="Suzumi"
        description="Manga Adaptation"
      />
      <Product
        imageUrl="https://pbs.twimg.com/media/DaDM26yVQAARzcL.jpg"
        name="Fireflies"
        description="Manga Adaptation"
      />
      <Product
        imageUrl="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/9/p/x/small-poster-anime-bardock-broly-dragon-ball-z-goku-goten-nappa-original-imagm2zggrfyag3u.jpeg?q=90&crop=false"
        name="Dragon Ball"
        description="Comic Adaptation"
      />
      <Product
        imageUrl="https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/e54ezd6macagzovidvmk.jpg"
        name="Your Name"
        description="Comic Adaptation"
      />
      <Product
        imageUrl="https://i0.wp.com/news.qoo-app.com/en/wp-content/uploads/sites/3/2022/07/ten-sura_movieKV2_feature.jpg"
        name="Slime"
        description="Comic Adaptation"
      />
      <Product
        imageUrl="https://c4.wallpaperflare.com/wallpaper/952/719/592/anime-your-name-kimi-no-na-wa-mitsuha-miyamizu-wallpaper-preview.jpg"
        name="Di Young"
        description="Comic Adaptation"
      />
      <Product
        imageUrl="https://nefariousreviews.wordpress.com/wp-content/uploads/2015/11/princess-mononoke-featured.jpg?w=672&h=372&crop=1"
        name="Mononoki"
        description="Comic Adaptation"
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
