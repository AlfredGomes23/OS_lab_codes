console.log("\nFCFS CPU Scheduling Algorithm\n");

console.log("Inputs:");
let proc = [0,1,2]
let arri = [2,0,4]
let brst = [5,3,4]

// print arrays
for (let i = 0; i < proc.length; i++) {
    console.log("Process: ", proc[i], " Arrival Time: ", arri[i], " Burst Time: ", brst[i], )
}console.log("");   //new line

// convert to an array of objs
input = []          
for (let i = 0; i < arri.length; i++){
    input.push({"Process":proc[i], "Arrival": arri[i], "Burst":brst[i]})
}

// sorting
input.sort((a,b) => a["Arrival"] - b["Arrival"]);
console.log("After sorting:");
for(let i = 0; i < input.length; i++){
    console.log(`Process: ${input[i]["Process"]}, Arrival: ${input[i]["Arrival"]}, Burst: ${input[i]["Burst"]}`);
}console.log("");   //new line

// calculation
let completion = input[0]["Arrival"] //first process arrival
console.log("Output after calculation:");
for (let i = 0; i < input.length; i++) {
    completion += input[i]["Burst"] //update completion time
    let turnAround = completion + input[i]["Burst"] - input[i]["Arrival"]
    let waiting = completion - input[i]["Arrival"]

    console.log(`Process: ${input[i]["Process"]}, Completion: ${completion}, Turn Around: ${turnAround}, Waiting & Response:${waiting}`);
}

