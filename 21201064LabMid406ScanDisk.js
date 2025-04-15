let reqSeq = [137, 240, 179, 75, 118, 29, 15, 51], output =[];
let head = 55, seekOp = 0;
console.log("The Head is ", head, "and the request sequence is: ");
reqSeq.forEach(n => process.stdout.write(n + ", "));

reqSeq.push(head);
reqSeq.sort((seq1, seq2) => seq1 - seq2);
//head to cylinder
output = reqSeq.filter( seq => (seq >= head));
let lastCylinder = output[output.length - 1];
seekOp += (lastCylinder -head);
//cylinder to left
reqSeq.sort((seq1, seq2) => seq2 - seq1);
output.push(...reqSeq.filter( seq => ((seq < head) && seq !== 0)));
seekOp+=(lastCylinder - output[output.length - 1]);

console.log("\nOutput:");
console.log("Total Seek Operations for Scan Disk Schedule: ", seekOp);
process.stdout.write("Sequence Order:  ");
output.forEach(n => process.stdout.write(n + " "));