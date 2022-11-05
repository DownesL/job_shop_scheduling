import React from "react";
import PropTypes from "prop-types";
import "./Grid.css";


export default class Grid extends React.Component {
    static propTypes = {
        jobAmount: PropTypes.number,
        machineAmount: PropTypes.number,
        reRender: PropTypes.func,
    };

    render() {
        let used = new Map();
        let machines = Array(this.props.machineAmount).fill(0).map((value, index) => String.fromCharCode(index + 97));
        let jobs = Array(this.props.jobAmount).fill(0).map((value, index) => {
            let job = { index: index, job: index + 1 };
            machines.forEach((value) => job[value] = Math.round(Math.random() * 5 + 1));
            return job;
        });
        const lowestNotUsed = (jobs) => {
            let lowest = {job: Infinity, machine: 'z', value: Infinity};

            jobs.forEach(job => {
                if (!used.has(job.job)) {
                    if (job.a < lowest.value && used.get("a") + job.a <= used.get("b") + job.b) {
                        lowest.value = job.a;
                        lowest.job = job.job;
                        lowest.machine = "a";
                    }
                    if (job.b < lowest.value && used.get("a") + job.a >= used.get("b") + job.b) {
                        lowest.value = job.b;
                        lowest.job = job.job;
                        lowest.machine = "b";
                    }
                }
            })
            used.set(lowest.job, lowest.value);
            used.set(lowest.machine, used.get(lowest.machine) + lowest.value);
            return lowest;
        }
        const johnsonsAlgorithm = (jobs = [{job: 1, a: 2, b: 2}]) => {
            used.set("a", 0);
            used.set("b", 0);
            let orderStart = [];
            let orderEnd = [];
            while (orderStart.length + orderEnd.length < jobs.length) {
                let next = lowestNotUsed(jobs);
                if (next.machine === "a") {
                    orderStart.push(next);
                } else {
                    orderEnd.unshift(next);
                }
            }
            return orderStart.concat(orderEnd);
        }
        let x = johnsonsAlgorithm(jobs);
        return (
            <div className={"tableContainer"}>
                <div className={"table"}>
                    <div className={"tableElement machines prim"}
                        style={{gridColumn: `2 / span ${machines.length}`}}>Machines</div>
                    <div className={"tableElement jobs prim"}>Jobs</div>
                    <div className={"tableElement sequence prim"}
                         style={{gridColumn: machines.length + 2}}> Sequence</div>
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
                            <div className={"tableElement sequence"} style={{gridColumn: machines.length + 2, gridRow: index + 3 }}>
                                <h4>Machine: {el.machine}</h4>
                                <p>Process (Time): {el.job} ({el.value})</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}