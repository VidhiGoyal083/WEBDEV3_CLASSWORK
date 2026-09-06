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

const express = require("express");
const app = express();
const port = 5000;
const packages = require("./data/tour");
app.get("/packages", (req, res) => {
    const destination = req.query.des;
    if (!destination) {
        res.json(packages);
    }

    const filteredPackages = packages.filter((pkg) => pkg.destination.toLowerCase());
    res.json(filteredPackages);
});


