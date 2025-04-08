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
//update seekSeq
seekOp+=(output[output.length - 1]-head);

//no sequence scan as it's c-scan
//update seekSeq for right to left travel
seekOp+=(reqSeq[reqSeq.length - 1]-reqSeq[0]);

//re-order the sequence
reqSeq.sort((seq1, seq2) => seq2 - seq1);
//starting to head
let leftSided = reqSeq.filter( seq => (seq < head))
output.push(...leftSided);
//update seekSeq
seekOp+=(leftSided[0] -leftSided[leftSided.length - 1]);

console.log("Output:");
console.log("Total Seek Operations: ", seekOp);
process.stdout.write("Sequence Order:  ");
output.forEach(n => process.stdout.write(n + " "));