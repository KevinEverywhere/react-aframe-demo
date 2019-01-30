import React from 'react';
import '../App.css';

class Aframed extends React.Component {
  constructor(props){
    super(props);
    this.state = { propName: 'propValue' };
  }
  // CSS is applied at the level of the a-frame structure. It cannot
  // be applied through className
  localStyle = () => ({width:'80vw',height:'40vh',margin:'2vh 10vw'});
  render() {
    return (
        <a-scene embedded style={this.localStyle()}>
        { this.props.assets}
        { this.props.entities}
          <a-sky color="blue" />
        </a-scene>
    );
  }
}

export default Aframed;
