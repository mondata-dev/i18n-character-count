const fs = require('fs');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));

const countString = function (acc, s) {
    if (typeof s === "string") {
        return acc + s.length;
    } else if (typeof s === "object" && s !== null) {
        return Object.values(s).reduce((acc, v) => {
            return countString(acc, v);
        }, acc)
    } else {
        return acc;
    }
}

const countFile = function (path) {
    try {
        console.log('parsing ', path);
        let obj = require(path);
        const count = countString(0, obj);
        console.log(count);
        return count;
    } catch (e) {
        console.error(e);
        return 0;
    }
}

const paths = argv._;
const exclude = argv.e || argv.exclude || [];
let count = 0;
paths.forEach(async p => {
    if (fs.lstatSync(p).isDirectory()) {
        fs.readdirSync(p).forEach(f => {
            if (!exclude.includes(f)) {
                count += countFile(path.join(p, f));
            } else {
                console.log('skipping: ', f);
            }
        })
    } else {
        count += countFile(p);
    }
})
console.log('total character count: ', count);
