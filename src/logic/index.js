let used;
// let jobs = [
//     {job: 1, a: 4, b: 3},
//     {job: 2, a: 1, b: 2},
//     {job: 3, a: 5, b: 4},
//     {job: 4, a: 2, b: 3},
//     {job: 5, a: 5, b: 6}
// ]

const lowestNotUsed = (jobs) => {
    let lowest = {job: Infinity, machine: 'z', value: Infinity};

    jobs.forEach(job => {
        if (!used.has(job.jobID)) {
            if (job.a < lowest.value && used.get("a") + job.a <= used.get("b") + job.b) {
                //
                lowest.value = job.a;
                lowest.jobID = job.jobID;
                lowest.machine = "a";
            }
            if (job.b < lowest.value && used.get("a") + job.a >= used.get("b") + job.b) {
                lowest.value = job.b;
                lowest.jobID = job.jobID;
                lowest.machine = "b";
            }
        }
    })
    used.set(lowest.jobID, lowest.value);
    used.set(lowest.machine, used.get(lowest.machine) + lowest.value);
    return lowest;
}
export const johnsonsAlgorithm = (jobs = [{jobID: 1, a: 2, b: 2}]) => {
    used = new Map();
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