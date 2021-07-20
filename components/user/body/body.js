import React, { Component } from 'react';
import Home from './home';
import Missi from './ourMission';
// import Latest from './latestCause'
const Body = ({ srcImages }) => {
  return (
    <div>
      <div className="page animated" style={{ animationDuration: '500ms' }}>
        <Home />
        <Missi srcImages={srcImages} />
        {/* <Latest/> */}
      </div>
    </div>
  );
};

export default Body;
