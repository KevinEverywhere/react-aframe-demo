import React from 'react';

class Aframed2 extends React.PureComponent {
  render() {
    const theProp = `primitive: ${this.props.type}`
    const thePosition = `1 0.75 -3`;
    return (
        <a-entity geometry={theProp} position={thePosition} radius="0.5" height="3.5" color="#c00" />
    );
  }
}

export default Aframed2;
