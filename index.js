const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');
const pdf = require('html-pdf');
const html = require('./generateHtml');

const questions = [{
    type: 'input',
    name: 'userName',
    message: 'What is your github username ?'
},
{
    type: 'list',
    name: 'color',
    message: 'Choose a color',
    choices: ['pink', 'darksalmon', 'yellow','rosybrown']
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
        userInfo['star_repos']=starRepos;        
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
    };
    
    `
}
promptUser()