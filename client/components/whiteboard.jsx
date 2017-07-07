import React from 'react';
import ReactDOM from 'react-dom';

class WhiteBoard extends React.Component {

	constructor() {
    super();

    this.state = {
    	mouseClick: false,
    	mouseMove: false,
    	mousePos: {x:0, y:0},
    	mousePosPrev: {x:0, y:0}
    }
  }

	componentDidMount() {
		console.log(this.state)
    this.updateCanvas();
    const canvas = this.refs.canvas;
  }

  handleMouseDown(e) {
    this.setState({mouseClick:true});
    this.setState({mousePosPrev: {x:e.clientX, y:e.clientY}});
    console.log('mouse is down', this.state.mouseClick)
  }

  handleMouseUp(e) {
  	this.setState({mouseClick:false});
  	this.setState({mousePosPrev: {x:e.clientX, y:e.clientY}});
  	console.log('mouse is up', this.state.mouseClick)
  };

  handleMouseMove(e) {
      // normalize mouse position to range 0.0 - 1.0
    this.setState({mousePos: {x:e.clientX, y:e.clientY}});
    console.log('mousemove', this.state.mousePos)
    // console.log('mousemoveY', this.state.mouse.pos.y)
  };

  updateCanvas() {
    const context = this.refs.canvas.getContext('2d');
      // context.fillRect(0,0, 100, 100);
    context.beginPath();
    context.moveTo(this.state.mousePosPrev.x, this.state.mousePosPrev.y);
    context.lineTo(this.state.mousePos.x, this.state.mousePos.y);
    context.stroke();
    console.log('calling from component did mount', this.state)
  }

  render() {
    return (
      <canvas onMouseMove={this.handleMouseMove.bind(this)} onMouseUp={this.handleMouseUp.bind(this)} onMouseDown={this.handleMouseDown.bind(this)} ref="canvas" width={300} height={300}/>
    );
  }



  //  // get canvas element and create context
  //  var canvas  = document.getElementsByClassName('drawing');
  //  var context = canvas.getContext('2d');
  //  var width   = window.innerWidth;
  //  var height  = window.innerHeight;


  //     // set canvas to full browser width/height
  //  canvas.width = width;
  //  canvas.height = height;

  //  // register mouse event handlers
  //  canvas.onmousedown = function(e){ 
  //  	console.log('mousedown', e);
  //  	mouse.click = true;
  //  };

  //  canvas.onmouseup = function(e){
  //  	console.log('mouseup', e); 
  //  	mouse.click = false;
  //  };

  //  canvas.onmousemove = function(e) {
  //     // normalize mouse position to range 0.0 - 1.0
  //     mouse.pos.x = e.clientX / width;
  //     mouse.pos.y = e.clientY / height;
  //     mouse.move = true;
  //     console.log(width)
  //  };

  //     context.beginPath();
  //     context.moveTo(0, 3);
  //     context.lineTo(43, 554);
  //     context.stroke();

  // }









  // render() {
  //   return (
  //     <div>
  //      <canvas className="drawing"></canvas>
  //     </div>
  //   );
  // }

}



export default WhiteBoard;