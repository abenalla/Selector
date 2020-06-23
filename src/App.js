import React, {Component} from 'react';
import "./App.css";
import SHape from './Shape';
import Shape from './Shape';


class Selector extends Component {
constructor(){
  super();
  this.state ={
  selectedShape: 'have not clicked on a shape',
  };
}
selectShape = (shape) =>{
  this.setState({
    selectedShape:shape,
  });
};

  render(){
    const{selectedShape} =this.state;
    console.log('this is my declared function', this.selectShape);
    return (
    <div className = 'container'>
      <div className = "navbar">
    <div>Selected: <span>{selectedShape}</span></div>
      </div>
        <div className = "shape-list">
          <Shape shape ="square"/>
          <Shape shape ="triangle"/>
          <Shape shape ="circle" />
          
      </div>
    </div>
    );
  }
}

export default Selector;