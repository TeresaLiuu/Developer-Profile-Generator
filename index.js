const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');
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
        const {userName, color} = await inquirer.prompt(questions);
        const queryUrl = `https://api.github.com/users/${userName}`;
        const res = await axios.get(queryUrl)
        const { avatar_url, name, location, html_url, blog, bio, public_repos, followers, following } = res.data;
        const queryUrl2 = `https://api.github.com/users/${userName}/repos`;
        const repos = await axios.get(queryUrl2)
        // console.log(repos.data.length);
        const starRepos = repos.data.filter(repo=>repo.stargazers_count > 0).length;
        console.log(starRepos);

    } catch (error) {
console.error(error);
    }
    
}

promptUser()

