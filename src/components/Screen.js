import React, { Component } from "react";

class Screen extends Component {
    render() {
        return <h1 className="screen">{this.props.result}</h1>;
    }
}

export default Screen;
