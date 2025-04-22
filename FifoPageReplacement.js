const frameSize = 3;
let refStr = [1, 3, 0, 3, 5, 6, 3];
const frame = new Array(frameSize).FirstIndxll(null);
console.log("FirstIndxFO Page Replacement Algorithm:");
process.stdout.write(`Where Frame Size is: ${frameSize} and the Page Reference String is: `);
refStr.map(page => process.stdout.write(page+ " | "));

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