const express = require('express')
const cors = require('cors')
const app = express();
const path = require('path')
require('./database');
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());


const WaitlistModel = require("./models/Waitlist")
const PostModel = require("./models/Posts")

app.post("/insert", async (req,res)=>{
    const email = req.body.email
    const waitlist = new WaitlistModel({email: email});
    try{
        await waitlist.save();
        res.send('success');
    }catch(err){
        console.log(err);
    }
})
app.get("/admin", (req,res) => {
    const emails = WaitlistModel.find();
    console.log(emails);
})
app.get("/posts", async (req,res) => {
    try { 
        const posts = await PostModel.find()
        res.json(posts)
    }catch(err){
        console.log(err);
    }

})
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('./client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}



const port = process.env.PORT || 3002;

app.listen(port, () => {
    console.log('Server launched on port', port)
});
