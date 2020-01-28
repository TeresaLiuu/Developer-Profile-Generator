const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');

function promptUser(){
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'What is your github username ?'
        },
        {
            type:'input',
            name:'color',
            message:'What is your fav color ?'
        }

    ]).then(answers =>{
        console.log(answers);
    }).catch(console.error);
}

promptUser()