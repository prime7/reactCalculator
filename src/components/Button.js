import React, { Component } from "react";

class Button extends Component {
    render() {
        const { value } = this.props;
        // console.log(value);
        let operatorStyle =
            value === "+" || value === "-" || value === "*" || value === "/"
                ? "operator"
                : "";

        operatorStyle += value === "=" || value === "C" ? "bottom" : "";
        console.log(operatorStyle);
        return (
            <React.Fragment>
                <button
                    className={operatorStyle}
                    onClick={() => this.props.onClick(value)}
                >
                    {value}
                </button>
            </React.Fragment>
        );
    }
}

export default Button;
