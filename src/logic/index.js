let used = new Map();
let jobs = [
    {job: 1, a: 4, b: 3},
    {job: 2, a: 1, b: 2},
    {job: 3, a: 5, b: 4},
    {job: 4, a: 2, b: 3},
    {job: 5, a: 5, b: 6}
]

const lowestNotUsed = (jobs) => {
    let lowest = {job: Infinity, machine: 'z', value: Infinity};

    jobs.forEach(job => {
        if (!used.has(job.job)) {
            if (job.a < lowest.value) {
                lowest.value = job.a;
                lowest.job = job.job;
                lowest.machine = "a";
            }
            if (job.b < lowest.value) {
                lowest.value = job.b;
                lowest.job = job.job;
                lowest.machine = "b";
            }
        }
    })
    used.set(lowest.job, lowest.value)
    return lowest;
}
const johnsonsAlgorithm = (jobs = [{job: 1, a: 2, b: 2}]) => {
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