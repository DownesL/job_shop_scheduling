import React from 'react';
import './App.css';
import ButtonPanel from "./components/ButtonPanel";
import Grid from "./components/Grid.js";

export default class App extends React.Component {
    state = {
        jobAmount: 2,
        machineAmount: 2
    };

    handleClick = (buttonName = "") => {
        let button = buttonName.split(" ");
        if(button[0]==="Jobs" && button[1] === "+") {
            this.setState({jobAmount: this.state.jobAmount + 1});
        } else if (button[0]==="Jobs" && button[1] === "-") {
            this.setState({jobAmount: this.state.jobAmount - 1});
        } else {
            if (button[1] === "+") {
                this.setState({machineAmount: this.state.machineAmount + 1});
            } else {
                this.setState({machineAmount: this.state.machineAmount - 1});
            }
        }
    };

    render() {
        return (
            <div className="component-app">
                <h1>Job Shop Scheduling</h1>
                <ButtonPanel clickHandler={this.handleClick} />
                <Grid jobAmount={this.state.jobAmount} machineAmount={this.state.machineAmount}/>
            </div>
        );
    }
}