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

// const os = require("os");
// const userInfo = os.userInfo();
// const platform = os.platform();
// const architecture = os.arch();
// const uptime = os.uptime();
// console.log(userInfo);
// console.log(platform);
// console.log(architecture);
// console.log(uptime);

// const fs = require("fs");
// fs.writeFileSync("data/mydata.txt", "Hello World");

// const path = require("path");
// const filePath = path.join(__dirname, "data", "mydata.txt");
// console.log(filePath);

// const process = require("process");
// console.log(process.argv);

require("dotenv").config();
console.log(process.env.PORT);
