const express = require('express')
const mongoose = require('mongooose')

const app = express()
const port = 3000;

app.use(express.json);

mongoose.connect("mongodb+srv://taggin2021:MAmrbwzYYjaKRR26@cluster0.yfj8t.mongodb.net/tags?retryWrites=true&w=majority",{
    useNewUrlParser: true,
});

app.get('/', (req,res)=>{

})

app.listen(port, () => 
    console.log('Server launched on port', port)
)
