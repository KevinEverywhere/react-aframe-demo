import React from 'react';

const aframedArgs = {
  position:'0 0 -4',
  rotation:'-90 0 0',
  width: 8,
  height: 4,
  color: "#FF7673"
};

const Aframed3 = () => <a-plane { ...aframedArgs } />;

export default Aframed3;
