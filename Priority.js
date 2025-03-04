console.log("\nPriority CPU Scheduling Algorithm:\n");

let input = [
    { "Process": 1, "Arrival": 0, "Burst": 5 , "Priority": 10},
    { "Process": 2, "Arrival": 1, "Burst": 4 , "Priority": 20},
    { "Process": 3, "Arrival": 2, "Burst": 2 , "Priority": 30},
    { "Process": 4, "Arrival": 4, "Burst": 1 , "Priority": 40}
];
console.log("Inputs:");                                     //printing inputs 
input.forEach(process => {
    console.log(`Process: ${process.Process}, Arrival: ${process.Arrival}, Burst: ${process.Burst}`);
    process.Remaining = process.Burst;                  // add remain time in each process
}); console.log("");

const timeQuantum = 1;                                 // time quantum for RR algorithm
let processes = [...input], output = [];                    //copy of input array
processes.sort((p1, p2) => p1.Arrival - p2.Arrival);        // Sort by Arrival Time
let readyQueue = [], ganttChart = [], currentTime = 0;    // Initialize Variables
for (let i = 0; i < processes.length; i++) {                // figuring out the initial
    if (processes[i].Arrival <= currentTime) {              // ready queue processes
        readyQueue.push(processes[i]);
        processes.splice(i, 1);
        i--;
    };
};      // implementing the RR algorithm
while (readyQueue.length > 0 || processes.length > 0) {
    readyQueue.sort((p1, p2) => p2.Priority - p1.Priority);        // Sort by higher priority
    let currentProcess = readyQueue.shift();        // remove the first ready queue process
    ganttChart.push(`P${currentProcess.Process}`);        // add  to the gantt chart
    if (currentProcess.Response === undefined) {      // response time for first time only
        currentProcess.Response = currentTime - currentProcess.Arrival;//calculate response time
    };    // update the times
    if (currentProcess.Remaining > timeQuantum) {
        currentProcess.Remaining -= timeQuantum;
        currentTime += timeQuantum;
    } else {
        currentTime += currentProcess.Remaining;
        currentProcess.Remaining -= currentProcess.Remaining;
    };
    // filter out newly arrived processes within the new current time
    for (let i = 0; i < processes.length; i++) {
        if (processes[i].Arrival <= currentTime) {
            readyQueue.push(processes[i]);
            processes.splice(i, 1);
            i--;
        };
    };    // check if the last process is completed
    if (currentProcess.Remaining === 0) {
        currentProcess.Completion = currentTime;
        currentProcess.Turnaround = currentProcess.Completion - currentProcess.Arrival;
        currentProcess.Waiting = currentProcess.Turnaround - currentProcess.Burst;
        // add the process to the output
        output.push(currentProcess);
    } else { // if not completed, add it back to the ready queue
        readyQueue.push(currentProcess);
    };
};      //printing gantt chart
process.stdout.write("Gantt Chart: | ");
ganttChart.forEach(p => process.stdout.write(p + " | "));
console.log("\n");
console.log("Output after Calculation:");// printing the output
output.sort((p1, p2) => p1.Process - p2.Process);       //sorting the output array
output.forEach(p => {
    console.log(`Process: ${p.Process}, Completion: ${p.Completion}, Turnaround: ${p.Turnaround}, Waiting: ${p.Waiting}, Response: ${p.Response}`);
});