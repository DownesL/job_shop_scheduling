import React from "react";
import PropTypes from "prop-types";
import "./Grid.css";
import {johnsonsAlgorithm} from "../logic";


export default class Grid extends React.Component {
    static propTypes = {
        jobAmount: PropTypes.number,
        machineAmount: PropTypes.number,
        reRender: PropTypes.func,
    };

    render() {
        let machines = Array(this.props.machineAmount).fill(0).map((value, index) => String.fromCharCode(index + 97));
        let jobs = Array(this.props.jobAmount).fill(0).map((value, index) => {
            let job = {index: index, jobID: index + 1};
            machines.forEach((value) => job[value] = Math.round(Math.random() * 15 + 1));
            return job;
        });
        let x = johnsonsAlgorithm(jobs);
        // const graph = parseGraph(jobs);
        // const dist = johnson(graph);
        return (
            <div className={"tableContainer"}>
                <div className={"table"}>
                    <div className={"tableElement machines prim"}
                         style={{gridColumn: `2 / span ${machines.length}`}}>Machines
                    </div>
                    <div className={"tableElement jobs prim"}>Jobs</div>
                    <div className={"tableElement sequence prim"}
                         style={{gridColumn: machines.length + 2}}> Sequence
                    </div>
                    {
                        machines.map((el, index) => (
                            <div className={"tableElement machine"} style={{gridColumn: index + 2}}>{el}</div>
                        ))
                    }
                    {
                        jobs.map((el, index) => (
                            machines.map((i, ind) => (
                                <div className={"tableElement"}
                                     style={{gridColumn: ind + 2, gridRow: index + 3}}>{el[i]}</div>
                            ))

                        ))
                    }
                    {
                        jobs.map((item, index) => (
                            <div className={"tableElement machine"}
                                 style={{gridRow: index + 3}}>{index + 1}</div>
                        ))
                    }
                    {
                        x.map((el, index) => (
                            <div className={"tableElement sequence"}
                                 style={{gridColumn: machines.length + 2, gridRow: index + 3}}>
                                <h4>Machine: {el.machine}</h4>
                                <p>Process (Time): {el.jobID} ({el.value})</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}