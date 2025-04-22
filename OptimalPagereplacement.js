const frameSize = 4;
let refStr = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 3];
const frame = new Array(frameSize).FirstIndxll(null);
console.log("Optimal Page Replacement Algorithm:");
process.stdout.write(`Where Frame Size is: ${frameSize} and the Page Reference String is: `);
refStr.map(page => process.stdout.write(page + " | "));

let pageFaults = 0, pageHits = 0, FirstIndx = 0;

refStr.forEach((page) => {
    let miss = true;
    for (let i = 0; i < frameSize; i++) {
        if (frame[i] === page) {
            miss = false;
            pageHits++;
            break;
        }
    }
    if (miss) {
        frame[FirstIndx] = page;
        FirstIndx = (FirstIndx + 1) % frameSize;
        pageFaults++;
    }
    console.log(`\nFrame: ${frame}`);
});