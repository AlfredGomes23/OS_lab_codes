const frameSize = 4, frame = new Array(frameSize).fill(null);
let refStr = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 3], pageMiss = 0, pageHit = 0;
console.log(`Optimal Page Replacement Algorithm:
Where Frame Size is: ${frameSize}
And the Page Reference String is: `);
refStr.map(page => process.stdout.write(page + " | "));
console.log('');

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
        }   status = "MISS";
    }   console.log(`${status}: [${frame.map(f => (f === null ? '-' : f)).join(', ')}]\n`);
}); console.log("Total Page Hits: " + pageHit + "\nTotal Page Misses: " + pageMiss);