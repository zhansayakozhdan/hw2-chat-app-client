import React from 'react';

//import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Realtime Chat App </h1>
    </div>
    {users && users.length > 0 && (
      <div>
        <h1>People currently chatting:</h1>
        <div className="textContainer__activeContainer">
          {users.map(({ name }) => (
            <h4 key={name} className="textContainer__activeItem">
              User: {name}
              <img alt="Online Icon" src="https://icones.pro/wp-content/uploads/2022/06/icone-du-bouton-en-ligne-vert.png" className="textContainer__onlineIcon" style={{width: 8, height: 8, marginBottom: 3}}/>
            </h4>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default TextContainer;