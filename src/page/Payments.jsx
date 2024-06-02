import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';

  
  const Orders = () => {
    useEffect(() => {
    document.body.style.backgroundColor = '#F5F5F5'; 

    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, 
[]);

  return (
    <>
      <div style={pStyle}>
        <h2></h2 >
      </div>
      <div style={itemStyle2}> 
          <Table striped bordered hover>
            <thead>
                  <tr>
                    
                  </tr>
              <tr>
                <th>Region</th>
                <th>All &nbsp; China &nbsp; Japan</th>
                    
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Genres</td>
                <td>All &nbsp; Original &nbsp; &nbsp; Comic Adaptation  &nbsp;   Novel Adaptation   &nbsp;  Game Adaptation  &nbsp;   Tokuyatsu  &nbsp;  Hot-blodded</td>
                         
              </tr>
              <tr>
                <td>Paid</td>
                <td>All &nbsp; Free &nbsp; Premium</td>
                 
              </tr>
              <tr>
                <td>Release Year</td>
                <td>All &nbsp; 2024&nbsp; 2023 &nbsp; 2022 &nbsp; 2021</td>
                            
              </tr>
              <tr>
                <td>Quarter</td>
                <td>All &nbsp; Winter &nbsp; Spring &nbsp; Summer &nbsp; Fall</td>      
              </tr>
              <tr>
                <td>Sort By</td>
                <td>Hot &nbsp;</td>       
              </tr>
            </tbody>
          </Table>
      </div>
    </>  
  );
};


export default Orders;

const pStyle = {
  display: 'flex',
  justifyContent: 'start',
  padding: "10px",
  position: "fixed",
  top: 80,
  left: 0,
  right: 0,
  marginLeft: "250px",
  color:'#808080',  
};

const itemStyle2 = {
  display: 'flex',
  height: '13rem',
  fontSize:"14px", 
  padding: "25px",
  position: "fixed",
  top: 150,
  left: 0,
  right: 0,
  zIndex: 1,
  marginLeft: "250px",
};