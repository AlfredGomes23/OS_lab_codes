let input = [
    { "Process": 1, "Arrival": 0, "Burst": 7 },
    { "Process": 2, "Arrival": 1, "Burst": 4 },
    { "Process": 3, "Arrival": 2, "Burst": 15 },
    { "Process": 4, "Arrival": 3, "Burst": 11 },
    { "Process": 5, "Arrival": 4, "Burst": 20 },
    { "Process": 6, "Arrival": 4, "Burst": 9 },
], output = [];

for (let i = 0; i < input.length; i++) {
    console.log(`Process: ${input[i]["Process"]}, Arrival: ${input[i]["Arrival"]}, Burst: ${input[i]["Burst"]}`);
}

input.sort((p1, p2) => p1["Arrival"] - p2["Arrival"]);
output.push(input[0]);

input.splice(0, 1);

let nextArri = [];
for (let i = 0; i < input.length; i++) {
    for (let i = 0; i < input.length; i++) {

        if (input[i]["Arrival"] <= output.at(-1)["Burst"]) {
            nextArri.push(input[i]);
            input.splice(i, 1);
            i--;
        }
    }
    nextArri.sort((p1, p2) => p1["Burst"] - p2["Burst"]);
    output.push(nextArri[0]);
    nextArri.splice(0, 1);

    if (input.length <= 1) {
        output.push(...nextArri)
    }
}
output.push(...input)

console.log("After sorting:");
for (let i = 0; i < output.length; i++) {
    console.log(`Process: ${output[i]["Process"]}, Arrival: ${output[i]["Arrival"]}, Burst: ${output[i]["Burst"]}`);
}


console.log("Output after Calculation:");

let completion = output[0]["Arrival"];
output.sort((p1, p2) => p1["Process"] - p2["Process"]);
for (let i = 0; i < output.length; i++) {

    completion += output[i]["Burst"];
    let turnAround = completion - output[i]["Arrival"];
    let waiting = turnAround - output[i]["Burst"];

    console.log(`Process: ${output[i]["Process"]}, Arrival: ${output[i]["Arrival"]}, Burst: ${output[i]["Burst"]} Completion: ${completion}, Turn Around: ${turnAround}, Waiting:${waiting}`);
}

console.log(output);