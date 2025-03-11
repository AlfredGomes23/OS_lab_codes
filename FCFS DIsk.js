reqSeq = [176, 79, 34, 60, 92, 11, 41, 114];
head = 50; //printing inputs
reqSeq.forEach(n => process.stdout.write(n + " "));
console.log("    and the Head: ", head, "\n");

currentPosition = head, seekOp = 0;

reqSeq.forEach(req => {
    seekOp += Math.abs(currentPosition - req);
    currentPosition = req;
});
console.log("Output:");
console.log("Total Seek Operations: ", seekOp);
process.stdout.write("Sequence Order:  ");
reqSeq.forEach(n => process.stdout.write(n + " "));