console.log("FCFS CPU Scheduling Algorithm\n");
// inputs in arrays
let proc = [0, 1, 2]
let arri = [2, 0, 4]
let burst = [5, 3, 4]

// print the arrays
console.log("Inputs before sorting:");
for (let i = 0; i < proc.length; i++) {
    console.log("Process: ", proc[i], " Arrival Time: ", arri[i], " Burst Time: ", burst[i])
} console.log("");   // new line

// convert to an array of objs
input = []
for (let i = 0; i < arri.length; i++) {
    input.push({ "Process": proc[i], "Arrival": arri[i], "Burst": burst[i] })
}

// sorting based on arrival time as per FCFS algorithm
input.sort((p1, p2) => p1["Arrival"] - p2["Arrival"]);

console.log("After sorting:");
for (let i = 0; i < input.length; i++) {
    console.log(`Process: ${input[i]["Process"]}, Arrival: ${input[i]["Arrival"]}, Burst: ${input[i]["Burst"]}`);
}
console.log("");   // new line

// calculation
console.log("Output after Calculation:");

let completion = input[0]["Arrival"] // first process arrival
for (let i = 0; i < input.length; i++) {

    completion += input[i]["Burst"]
    let turnAround = completion - input[i]["Arrival"]
    let waiting = turnAround - input[i]["Burst"]

    console.log(`Process: ${input[i]["Process"]}, Completion: ${completion}, Turn Around: ${turnAround}, Waiting:${waiting}`);
}
