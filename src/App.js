import React from 'react';
import 'aframe';
import Aframed from './components/Aframed';
import Aframed2 from './components/Aframed2';
import Aframed3 from './components/Aframed3';
import ChildObjectContainer from './components/ChildObjectContainer';
import './App.css';
/**
 * This is a demonstration of intercomponental design across react and a-frame
 * frameworks. In this example, assets and entities required in a-frame are
 * defined in method arguments that are fed through props to the Aframed
 * component which are then rendered.
 */
class App extends React.Component {
  assetsArg(){
    return (
      <a-assets>
        <img alt="" id="skyTexture" crossOrigin="anonymous" src="assets/eclipse.png" />
      </a-assets>
    );
  }
  entitiesArg(){
    return (
      <a-entity>
        <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" />
        <a-sphere position="0 1.25 -5" radius="1.25" color="#fef25E" />
        <ChildObjectContainer type="typeA" />
        <ChildObjectContainer type="typeB" asset="#skyTexture" />
        <Aframed2 type="cylinder" />
        <Aframed3 />
      </a-entity>
    );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>AFrame within React </h1>
        </header>
        <Aframed assets={this.assetsArg()} entities={this.entitiesArg()} />
      </div>
    );
  }
}

export default App;
