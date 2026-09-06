// EXPRESS DAY-1
// const express = require("express");
// const app = express();
// const packages = require("./data/tour");

// app.get("/",(req, res)=>{
//     res.send("hiee !!! welcome to my server");
// });

// app.get("/packages",(req, res)=>{
//     res.json(packages);
// });

// app.get("/packages/:id",(req, res)=>{
//     const id = Number(req.params.id);
//     const onePack = packages.find(item=>item.id === id);
//     res.json(onePack); 
    
// });

// app.listen(5000,()=>{
//     console.log("server is running on port 5000");
// });



// EXPRESS DAY-2
// const express = require("express");
// const app = express();
// const port = 5000;
// const packages = require("./data/tour");

// app.get("/packages", (req, res) => {
//   res.json(packagesJson);
// });

// app.get("/packages/:id", (req, res) => {
//     res.json(packagesJson);
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// const express = require("express");
// const app = express();
// const port = 5000;
// const packages = require("./data/tour");
// app.get("/packages", (req, res) => {
//     const destination = req.query.des;
//     if (!destination) {
//         res.json(packages);
//     }

//     const filteredPackages = packages.filter((pkg) => pkg.destination.toLowerCase());
//     res.json(filteredPackages);
// });



//EXPRESS DAY-3
// const express = require("express");
// const app = express();
// const port = 5000;
// const packages = require("./data/tour");
// app.get("/packages", (req, res) => {
//     const destination = req.query.des;
//     if (!destination) {
//         res.json(packages);
//     }

//     const filteredPackages = packages.filter((pkg) => pkg.destination.toLowerCase());
//     res.json(filteredPackages);
// });


// EXPRESS DAY-4
// const express = require('express');
// const app = express();
// const port=3000;
// const tourRouter = require('./route/tourRouter');  
// app.use(express.json());  // is line ke bina code nahi chalega 
// app.use('/tours',tourRouter); // '/tours' yeh home route ban jayega 

// app.listen(port,()=>{
//     console.log(`Example app listening on port ${port}`);
// });

// EXPRESS DAY-5
const express = require('express');
const app = express();
const port=3000;
const tourRouter = require('./route/tourRouter');  
app.use(express.json());  // is line ke bina code nahi chalega 
app.use('/tours',tourRouter); // '/tours' yeh home route ban jayega 

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
});

const UserPort=8080;
const userRouter = require('./route/userRouter');  
app.use(express.json());  
app.use('/user',userRouter); 

app.listen(UserPort,()=>{
    console.log(`user is running on the port ${UserPort}`);
});