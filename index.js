const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([{
        message: "What is your name?",
        name: 'name',
        type: 'input'
    },
    {
        message: 'Where is your location?',
        name: 'place',
        type: 'input'
    },
    {
        message: 'What is your bio?',
        name: 'bio',
        type: 'input'
    },
    {
        message: 'Enter your LinkedIn Url.',
        name: 'linkedIn',
        type: 'input'
    },
    {
        message: 'Enter your GitHub Url.',
        name: 'gitHub',
        type: 'input'
    }
    ])
    .then((response) => {
        console.log(response);
        const myPort = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Generator</title>
</head>
<body>
    <h1>${response.name}</h1>
    <p>${response.place}</p>
    <p>${response.bio}</p>
    <p>${response.linkedIn}</p>
    <p>${response.gitHub}</p>
</body>
</html>`
    })



fs.writeFile("index.html", myPort, (err) =>
    err ? console.error(err) : console.log('Success!')
);