import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
    static propTypes = {
        clickHandler: PropTypes.func
    };

    handleClick = buttonName => {
        this.props.clickHandler(buttonName);
    };

    render() {
        return (
            <div className={"buttonPanel"}>
                <Button name="Jobs" clickHandler={this.handleClick}/>
                <Button name="Machines" clickHandler={this.handleClick}/>
            </div>
        );
    }
}