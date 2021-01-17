import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        var randomColor = require('randomcolor'); // import the script
        var color = randomColor(); // a hex code 
        this.state = {
            date: new Date(),
            clockColor: { color: color }
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);

    }

    tick() {
        var randomColor = require('randomcolor'); // import the script
        var color = randomColor(); // a hex code 
        this.setState({ date: new Date(), clockColor: {color: color} });
    }

    render() {
        return (
            <div>
                <h3 style={this.state.clockColor}> {this.state.date.toLocaleTimeString()}.</h3>
            </div>
        );
    }
}

export default Clock;