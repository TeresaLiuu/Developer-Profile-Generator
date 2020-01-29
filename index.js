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
        const { userName, color } = await inquirer.prompt(questions);
        const queryUrl = `https://api.github.com/users/${userName}`;
        const res = await axios.get(queryUrl)
        const userInfo = res.data;
        const queryUrl2 = `https://api.github.com/users/${userName}/repos`;
        const repos = await axios.get(queryUrl2)
        const starRepos = repos.data.filter(repo => repo.stargazers_count > 0).length;
        // console.log(avatar_url, name, location, html_url, blog, bio, public_repos, followers, following);
        const html = generateHtml(userInfo);
        const css = generateCss(color)
        fs.writeFile('index.html', html, (err) => {
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

function generateHtml({ avatar_url, name, location, html_url, blog, bio, public_repos, followers, following }){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Document</title>
    </head>
    <body>
        <div class="card" style="width: 18rem;">
                <img src="${avatar_url}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">I am from ${location}</p>
            </div>
        </div>

    </body>
    </html>`;
}

function generateCss(color){
    return `
    body {
        background-color: ${color}
    }
    `
}

promptUser()
    