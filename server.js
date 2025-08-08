const express =require('express');
const mongoose =require('monogoose');
const bodyparser=require('body-parser');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(bodyparser.json());

mongoose.connect('mongodb+srv://elakkiya10112005:ELAKKIYA@cluster0.uiaskha.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlparser:true,
    useUnifiedTopology:true
})
.then(() => console.log("MongoDB Atlas Connected"))
.catch(err => console.log(err));