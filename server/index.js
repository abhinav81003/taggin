const express = require('express')
const mongoose = require('mongoose')
const app = express();

const port = 3001;

 const WaitlistModel = require("./models/Waitlist")

app.use(express.json());

mongoose.connect("mongodb+srv://taggin2021:MAmrbwzYYjaKRR26@cluster0.yfj8t.mongodb.net/tags?retryWrites=true&w=majority",{
    useNewUrlParser: true,
});

app.get("/", async (req,res)=>{
    const waitlist = new WaitlistModel({email: "abhinav2k21@gmail.com"});
    try{
        await waitlist.save();
        res.send('success');
    }catch(err){
        console.log(err);
    }
})

app.listen(port, () => {
    console.log('Server launched on port', port)
});
