const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile('./index.html',generatePage(name, github), err => {
    if (err) throw new Error;

    console.log('Portfolio complete! Chout out index.html to see the output!');
});