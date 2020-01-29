const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');
const html = require ('./generateHtml');

const questions = [{
    type: 'input',
    name: 'userName',
    message: 'What is your github username ?'
},
{
    type: 'list',
    name: 'color',
    message: 'What is your fav color ?',
    choices: ['pink', 'blue', 'yellow']
}];

async function promptUser() {
    try {
        const { userName, color } = await inquirer.prompt(questions);
        const queryUrl = `https://api.github.com/users/${userName}`;
        const res = await axios.get(queryUrl)
        const userInfo = res.data;
        const queryUrl2 = `https://api.github.com/users/${userName}/repos`;
        const repos = await axios.get(queryUrl2)
        const starRepos = repos.data.filter(repo => repo.stargazers_count > 0).length;
        const index = html.generateHtml(userInfo);
        const css = generateCss(color);

        fs.writeFile('index.html', index, (err) => {
            console.log(err)
        });

        fs.writeFile('style.css', css, (err) => {
            console.log(err)
        });
    }
    catch (error) {
        console.error(error);
    }

};


function generateCss(color) {
    return `
    .card {
        background-color: ${color}
        color: white;
    };
    `
}

promptUser()
