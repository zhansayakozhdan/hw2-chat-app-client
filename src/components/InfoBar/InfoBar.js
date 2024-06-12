import React from 'react';


import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="infoBar__onlineIcon" src="https://upload.wikimedia.org/wikipedia/commons/1/16/Status-user-online-icon.png" alt="online icon" style={{width: 10, height: 10}}/> 
      <h3 style={{marginLeft: 10}}>Room Name: {room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/" style={{marginRight: 10}}><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png" alt="close icon" style={{width: 20, height: 20}}/></a>
    </div>
  </div>
);

export default InfoBar;

