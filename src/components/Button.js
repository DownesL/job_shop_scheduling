import React from "react";
import PropTypes from "prop-types";
import "./Button.css";


export default class Button extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        clickHandler: PropTypes.func,
        machineAmount: PropTypes.number,
    };
    jobAmount = 2;

    handleAdd = () => {
        this.jobAmount++;
        this.handleClick("+");
    };
    handleSubtract = () => {
        this.jobAmount--;
        this.handleClick("-");
    }
    handleClick = (method) => {
        this.props.clickHandler(this.props.name + " " + method);
    }

    render() {
        return (
            <div className={"btnSection"}>
                <h2>{this.props.name} · {this.props.name === "Jobs" ? this.jobAmount : 2}</h2>
                <div>
                    <button onClick={this.handleAdd} disabled={this.props.name !== "Jobs"} className={"add"}>Add +</button>
                    <button onClick={this.handleSubtract} disabled={this.props.name !== "Jobs"} className={"subtract"}>Subtract -</button>
                </div>
            </div>
        );
    }
}