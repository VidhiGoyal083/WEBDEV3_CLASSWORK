// console.log("hello World");

// const cities = require("./data/mydata");
// console.log(cities);

// const chalk = require("chalk");
// console.log(chalk.blue("Hello World"));
// console.log(chalk.red("Hello World"));
// import chalk from "chalk";
// console.log(chalk.blue("Hello World"));
// console.log(chalk.red("Hello World"));
// console.log(chalk.green("Hello World"));
// console.log(chalk.yellow("Hello World"));
// console.log(chalk.bgBlue("Hello World"));
// console.log(chalk.bgRed("Hello World"));
// console.log(chalk.bgGreen("Hello World"));
// console.log(chalk.bgYellow("Hello World"));
// console.log(chalk.bold("Hello World"));

const os = require("os");
const userInfo = os.userInfo();
const platform = os.platform();
const architecture = os.arch();
const uptime = os.uptime();
console.log(userInfo);
console.log(platform);
console.log(architecture);
console.log(uptime);

const fs = require("fs");
fs.writeFileSync("data/mydata.txt", "Hello World");

const path = require("path");
const filePath = path.join(__dirname, "data", "mydata.txt");
console.log(filePath);

const process = require("process");
console.log(process.argv);

require("dotenv").config();
console.log(process.env.PORT);


// day -3 
const http = require('http');
const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.end(
            `<h1 style = 'color:red'> Hello World </h1>
            <p> Welcome to my first node js application </p>`
        );}
    else{
        res.writeHead(404,{'content-type':'application/json'});
        res.end(JSON.stringify({error:'Route not found'}));
    }
});

// require('dotenv').config();
// const Port = process.env.PORT|| 3000;
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<h1>Hello World</h1>');
//     res.write('<p>Welcome to my first node js application</p>');
//     res.end();
// });
// server.listen(Port, () => {
//     console.log(`Server is running on port ${Port}`);
// });