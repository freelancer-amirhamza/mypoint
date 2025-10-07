const app = require("./app.ts")
require("dotenv").config();
const PORT = process.env.PORT || 4000;





app.get("/",(req:any,res:any)=>{
    res.send(`<center><h1>server is running successfully!</h1><br/> <h1>Welcome to nagorik service server site!</h1></center>`)
});

app.listen(PORT, async(req:any,res:any)=>{
    console.log(`server is running at http://localhost:${PORT}`);
})
