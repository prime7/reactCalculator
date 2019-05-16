import React, { Component } from "react";
import "./app.css";
import Screen from "./components/Screen";
import Button from "./components/Button";

class App extends Component {
    state = {
        result: ""
    };

    handleButtonClick = value => {
        if (value === "=") this.calculate();
        else if (value === "C") this.clear();
        else {
            this.setState({ result: this.state.result + value });
        }
    };
    calculate = () => {
        try {
            this.setState({ result: eval(this.state.result) || "" });
        } catch (e) {
            this.setState({ result: "" });
        }
    };
    clear = () => {
        this.setState({ result: "" });
    };
    render() {
        return (
            <div className="content-body bg-dark">
                <div className="jumbotron">
                    <h5 className="text-center">React Calculator</h5>
                </div>
                <Screen result={this.state.result} />
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <Button
                                value="1"
                                onClick={value => this.handleButtonClick(value)}
                            />
                        </div>
                        <div className="col-3">
                            <Button
                                value="2"
                                onClick={value => this.handleButtonClick(value)}
                            />
                        </div>
                        <div className="col-3">
                            <Button
                                value="3"
                                onClick={value => this.handleButtonClick(value)}
                            />
                        </div>
                        <div className="col-3">
                            <Button
                                value="+"
                                onClick={value => this.handleButtonClick(value)}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-3">
                            <Button
                                value="4"
                                onClick={value => this.handleButtonClick(value)}
                            />
                        </div>
                        <div className="col-3">
                            <Button
                                value="5"
                                onClick={value => this.handleButtonClick(value)}
                            />
                        </div>
                        <div className="col-3">
                            <Button
                                value="6"
                                onClick={value => this.handleButtonClick(value)}
                            />
                        </div>
                        <div className="col-3">
                            <Button
                                value="-"
                                onClick={value => this.handleButtonClick(value)}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-3">
                            <Button
                                value="7"
                                onClick={value => this.handleButtonClick(value)}
                            />
                        </div>
                        <div className="col-3">
                            <Button
                                value="8"
                                onClick={value => this.handleButtonClick(value)}
                            />
                        </div>
                        <div className="col-3">
                            <Button
                                value="9"
                                onClick={value => this.handleButtonClick(value)}
                            />
                        </div>
                        <div className="col-3">
                            <Button
                                value="*"
                                onClick={value => this.handleButtonClick(value)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <Button
                                value="="
                                onClick={value => this.handleButtonClick(value)}
                            />
                        </div>
                        <div className="col-3">
                            <Button
                                value="0"
                                onClick={value => this.handleButtonClick(value)}
                            />
                        </div>
                        <div className="col-3">
                            <Button
                                value="C"
                                onClick={value => this.handleButtonClick(value)}
                            />
                        </div>
                        <div className="col-3">
                            <Button
                                value="+"
                                onClick={value => this.handleButtonClick(value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
