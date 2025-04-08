let reqSeq = [0,14, 41, 53, 65, 67, 98, 122, 124, 183, 199], output =[];
let head = 53, seekOp = 0; //printing inputs
reqSeq.forEach(n => process.stdout.write(n + ", "));
console.log("    and the Head is ", head, "\n");
//order the sequence
reqSeq.sort((seq1, seq2) => seq1 - seq2);
//find the head index
let headIndex = reqSeq.indexOf(head);
//head to cylinder
output = reqSeq.filter( seq => (seq >= head));
//update seekOp
seekOp+=(output[output.length - 1]-head);
let lastCylinder = output[output.length - 1]
//re-order the sequence
reqSeq.sort((seq1, seq2) => seq2 - seq1);
//cylinder to starting
output.push(...reqSeq.filter( seq => ((seq < head) && seq !== 0)));
//update seekOp
seekOp+=(lastCylinder - output[output.length - 1]);
console.log("Output:");
console.log("Total Seek Operations for Scan Disk Schedule: ", seekOp);
process.stdout.write("Sequence Order:  ");
output.forEach(n => process.stdout.write(n + " "));