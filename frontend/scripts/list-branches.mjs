import fs from 'fs';

let rawdata = fs.readFileSync('branches.json');
let branches = JSON.parse(rawdata);
console.log("# Storybook QA Sites for Branches\n")
for (const b of branches) {
    console.log(`* [${b.name}](../storybook-qa/${b.name}/index.html)`);
}
