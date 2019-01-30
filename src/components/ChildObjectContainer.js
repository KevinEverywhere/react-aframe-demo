import React from 'react';

export default class ChildObjectContainer extends React.Component {
  render(){
    switch(this.props.type){
      case 'typeA':
        return <a-sphere position="2 1.25 -6.5" radius="2.5" color="#5e429E" />;
      case 'typeB':
        return <a-sphere src={this.props.asset} position="-2 3.25 -11.5" radius="2" color="#cc89c5" />;
      default:
        return <a-sphere position="2 11.25 -6.5" radius="0.5" color="#f3fdf0" />;
    }
  }
}
