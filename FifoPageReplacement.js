const frameSize = 3;
let refStr = [1, 3, 0, 3, 5, 6, 3];
const frame = new Array(frameSize).fill(null);
console.log("\nFiFO Page Replacement Algorithm:");
console.log(`Where Frame Size is: ${frameSize}
And the Page Reference String is: `);
refStr.map(page => process.stdout.write(page + " | "));
console.log('');

let pageMiss = 0, pageHit = 0, FirstIndx = 0;
refStr.forEach((page) => {
    let miss = true;
    for (let i = 0; i < frameSize; i++) {
        if (frame[i] === page) {
            miss = false;
            pageHit++;
            break;
        }
    }
    if (miss) {
        frame[FirstIndx] = page;
        FirstIndx = (FirstIndx + 1) % frameSize;
        pageMiss++;
    }
    console.log(`\n${miss?"Miss":"Hit"} ${frame}`);
});
console.log("\nTotal Page Hits: " + pageHit + "\nTotal Page Faults: " + pageMiss);