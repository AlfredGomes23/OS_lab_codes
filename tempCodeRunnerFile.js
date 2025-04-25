const frameSize = 4;
let refStr = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 3];
const frame = new Array(frameSize).fill(null);
console.log("Optimal Page Replacement Algorithm:");
console.log(`Where Frame Size is: ${frameSize} \nAnd the Page Reference String is: `);
refStr.map(page => process.stdout.write(page + " | "));
console.log('\n');

let pageMiss = 0, pageHit = 0, optimalIndx = -1, firstHit = false;

refStr.forEach((page, i) => {
    let status = null;
    if (frame.includes(page)) {
        pageHit++;
        status = "HIT ";;
    } else {
        pageMiss++;
        if (frame.includes(null)) {
            frame[frame.indexOf(null)] = page;
        } else {
            let farthest = -1, replaceIndex = -1;
            frame.forEach((f, j) => {
                let nextUse = refStr.slice(i + 1).indexOf(f);
                if (nextUse === -1) nextUse = refStr.length;
                if (nextUse > farthest) {
                    farthest = nextUse;
                    replaceIndex = j;
                }
            });
            frame[replaceIndex] = page;
        }
        status = "MISS";
    }
    console.log(`${status}: [${frame.map(f => (f === null ? '-' : f)).join(', ')}]`);
    console.log("");
});
console.log("Total Page Hits: " + pageHit);
console.log("Total Page Misses: " + pageMiss);