reqSeq = [176, 79, 34, 60, 92, 11, 41, 114];
head = 50; //printing inputs
reqSeq.forEach(n => process.stdout.write(n + " "));
console.log("    and the HEAD: ", head, "\n");

currentPosition = head, closedSeq = 0, seekOp = 0, output = [];
reqSeq.push(head);                          // add the head to the sequence

while (reqSeq.length > 1) {                 // loop until the sequence is empty
    reqSeq.sort((a, b) => a - b);
   
    headIndex = reqSeq.indexOf(head);       // find the head index
    if ((reqSeq[headIndex] - reqSeq[headIndex - 1]) < (reqSeq[headIndex + 1] - reqSeq[headIndex])) {                        // find the nearest sequence to the head
        closedSeq = reqSeq[headIndex - 1];
    } else {
        closedSeq = reqSeq[headIndex + 1];
    }
    output.push(closedSeq);                 // add the nearest sequence to the output
    reqSeq.splice(headIndex, 1);            // remove the head from the sequence
    head = closedSeq;
}               // calculate the seek operation
output.forEach(n => {
    seekOp += Math.abs(currentPosition - n);
    currentPosition = n;
});             // printing the output
console.log("The seek operation is: ", seekOp);
console.log("The sequence is: ", output.join(" -> "));