import React from 'react';
import ReactDOM from 'react-dom';
// import io from 'socket.io-client';

class WhiteBoard extends React.Component {

	constructor(props) {
    super(props);

    this.state = {
    	mouseClick: false,
    	mouseMove: false,
    	mousePos: {x:0, y:0},
    	mousePosPrev: false
    }
  }

  handleMouseDown(e) {
    this.setState({mouseClick:true});
  }

  handleMouseMove(e) {
    this.setState({mousePos: {x:e.pageX, y:e.pageY}});
    this.setState({mouseMove:true});
  };

  handleMouseUp(e) {
  	this.setState({mouseClick:false});
  }

  mainLoop() {
      // check if the user is drawing
      if (this.state.mouseClick && this.state.mouseMove && this.state.mousePosPrev) {
         // send line to to the server
         this.props.socket.emit('draw_line', { line: [ this.state.mousePos, this.state.mousePosPrev ] });
         this.setState({mouseMove: true});
      }

      this.setState({mousePosPrev: {x: this.state.mousePos.x, y: this.state.mousePos.y}});
      setTimeout(this.mainLoop.bind(this), 10);
  }

  // draw(){
  	//  const context = this.refs.canvas.getContext('2d')
   // 	 var width   = window.innerWidth;
   //   var height  = window.innerHeight;
   //   context.beginPath();
   //    // context.moveTo(line[0].x * width, line[0].y * height);
   //    // context.lineTo(line[1].x * width, line[1].y * height);
   //   context.moveTo(40, 30);
   //   context.lineTo(45, 42);
   //   context.stroke();
   // };
  

	componentDidMount() {
		// this.draw()

	 const canvas = this.refs.canvas
	 const context = this.refs.canvas.getContext('2d')
   var width   = window.innerWidth;
   var height  = window.innerHeight;


	 this.props.socket.on('draw_line', function (data) {
    console.log('hi')
	 		context.strokeStyle = "#df4b26";
  context.lineJoin = "round";
  context.lineWidth = 5;
      context.beginPath();
      // context.moveTo(data.line[0].x * width, data.line[0].y * height);
      // context.lineTo(data.line[1].x * width, data.line[1].y * height);
      context.moveTo(data.line[0].x - canvas.offsetLeft, data.line[0].y - canvas.offsetTop);
      context.lineTo(data.line[1].x - canvas.offsetLeft, data.line[1].y - canvas.offsetTop);

      // context.moveTo(data.line[0].x, data.line[0].y);
      // context.lineTo(data.line[1].x, data.line[1].y);

      context.stroke();
   });

	 this.mainLoop();

	}



 

  render() {
    return (
      <canvas 
      	onMouseMove={this.handleMouseMove.bind(this)}
      	onMouseUp={this.handleMouseUp.bind(this)}
      	onMouseDown={this.handleMouseDown.bind(this)} ref="canvas" width={window.innerWidth} height={window.innerHeight}/>
    );
  }


}



export default WhiteBoard;