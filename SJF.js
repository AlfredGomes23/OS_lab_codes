console.log("\nSJF CPU scheduling Algorithm:\n");
console.log("Inputs Before Sorting:");
let input = [
    { "Process": 1, "Arrival": 2, "Burst": 6 },
    { "Process": 2, "Arrival": 5, "Burst": 2 },
    { "Process": 3, "Arrival": 1, "Burst": 8 },
    { "Process": 4, "Arrival": 0, "Burst": 3 },
    { "Process": 5, "Arrival": 4, "Burst": 4 }
]
for (let i = 0; i < input.length; i++) {                //printing inputs
    console.log(`Process: ${input[i]["Process"]}, Arrival: ${input[i]["Arrival"]}, Burst: ${input[i]["Burst"]}`);
}
console.log("");                                        // new line

let output = []

// sorting-out the first/initial process
input.sort((p1, p2) => p1["Arrival"] - p2["Arrival"]);
output.push(input[0]);                                  // store it 
// remove it from old array to avoid mis-sorting 
input.splice(0, 1);

// temp array to store recently arrived processes
let nextArri = [];
for (let i = 0; i < input.length; i++) {                // to check again for new recent one
    for (let i = 0; i < input.length; i++) {            // to check inputs
        // checking out which one arrived recently
        if (input[i]["Arrival"] <= output.at(-1)["Burst"]) {
            nextArri.push(input[i]);                    // store recent one into temp array
            input.splice(i, 1);                          //remove it from original one
            i--;                                        //adjust loop index as removed one element
        }
    }
    // implemnt SortestJobFisrt logic
    nextArri.sort((p1, p2) => p1["Burst"] - p2["Burst"]);   //sort by busrt time
    output.push(nextArri[0]);                               //store it
    nextArri.splice(0, 1);                                  //remove to avoid mis-sorting
    //  check for last one in temp and add it to output
    if (input.length <= 1) {
        output.push(...nextArri)
    }
}
//  check for last one in input/original and add it to output
output.push(...input)

console.log("After sorting:");
for (let i = 0; i < output.length; i++) {
    console.log(`Process: ${output[i]["Process"]}, Arrival: ${output[i]["Arrival"]}, Burst: ${output[i]["Burst"]}`);
}
console.log("");                                            // new line

// calculation
console.log("Output after Calculation:");

let completion = output[0]["Arrival"];                       // first process arrival
let totalWaiting = 0, totalTA = 0
for (let i = 0; i < output.length; i++) {

    completion += output[i]["Burst"];
    let turnAround = completion - output[i]["Arrival"];
    totalTA += turnAround;
    let waiting = turnAround - output[i]["Burst"];
    totalWaiting += waiting;

    console.log(`Process: ${output[i]["Process"]}, Completion: ${completion}, Turn Around: ${turnAround}, Waiting:${waiting}`);
}
console.log("\nAverage TurnAround Time: ", totalTA / output.length, "\nAverage Waiting Time: ", totalWaiting / output.length);