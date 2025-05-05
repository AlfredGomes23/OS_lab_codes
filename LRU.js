const frameSize = 3, frame = new Array(frameSize).fill(null);
let refStr = [1, 3, 0, 3, 5, 6, 3], pageMiss = 0, pageHit = 0;
let recent = []; // To track the order of usage for LRU
console.log("\nLRU Page Replacement Algorithm:");
console.log(`Where Frame Size is: ${frameSize}
And the Page Reference String is: `);
refStr.map(page => process.stdout.write(page + " | "));
console.log('');

refStr.forEach((page) => {
    let miss = true;
    for (let i = 0; i < frameSize; i++) {
        if (frame[i] === page) {
            miss = false;
            pageHit++;
            // Update recent usage
            recent.splice(recent.indexOf(page), 1);
            recent.push(page);
            break;
        }
    }
    if (miss) {
        if (frame.includes(null)) {
            // Fill empty frame slots first
            const emptyIndex = frame.indexOf(null);
            frame[emptyIndex] = page;
        } else {
            // Replace the least recently used page
            const lruPage = recent.shift();
            const lruIndex = frame.indexOf(lruPage);
            frame[lruIndex] = page;
        }
        recent.push(page);
        pageMiss++;
    }
    console.log(`\n${miss ? "Miss" : "Hit"} ${frame}`);
});
console.log("\nTotal Page Hits: " + pageHit + "\nTotal Page Faults: " + pageMiss);