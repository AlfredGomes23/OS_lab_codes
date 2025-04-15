let input = [{ "Process": 1, "Arrival": 0, "Burst": 7 },
{ "Process": 2, "Arrival": 1, "Burst": 4 },
{ "Process": 3, "Arrival": 2, "Burst": 15 },
{ "Process": 4, "Arrival": 3, "Burst": 11 },
{ "Process": 5, "Arrival": 4, "Burst": 20 },
{ "Process": 6, "Arrival": 4, "Burst": 9 }];
input.forEach(process => process.Remaining = process.Burst);
const tq = 5;
let processes = [...input], output = [];
processes.sort((p1, p2) => p1.Arrival - p2.Arrival);
let ready = [], gantt = [], currentTime = 0;
//for starting processes
for (let i = 0; i < processes.length; i++) {
    if (processes[i].Arrival <= currentTime) {
        ready.push(processes[i]);
        processes.splice(i, 1);
        i--;
    };
};
while (ready.length > 0 || processes.length > 0) {
    let running = ready.shift(); //deQueue
    gantt.push(`P${running.Process}`);
    //update remaining and current time
    if (running.Remaining > tq) {
        running.Remaining -= tq;
        currentTime += tq;
    } else {
        currentTime += running.Remaining;
        running.Remaining -= running.Remaining;
    };    //check for new arrivals
    for (let i = 0; i < processes.length; i++) {
        if (processes[i].Arrival <= currentTime) {
            ready.push(processes[i]);
            processes.splice(i, 1);
            i--;
        };
    };    //check for completed
    if (running.Remaining === 0) {
        running.Completion = currentTime;
        running.Turnaround = running.Completion - running.Arrival;
        running.Waiting = running.Turnaround - running.Burst;
        output.push(running);
    } else
        ready.push(running);
};
process.stdout.write("Gantt Chart: | ");
gantt.forEach(p => process.stdout.write(p + " | "));
console.log("\nTabular form:");
output.sort((p1, p2) => p1.Process - p2.Process);
output.forEach(p => console.log(`Process: ${p.Process},     Arrival: ${p.Arrival},      Burst: ${p.Burst}       Completion: ${p.Completion},        Turnaround: ${p.Turnaround},      Waiting: ${p.Waiting}`));