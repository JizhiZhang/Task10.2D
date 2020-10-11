const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const Task = require("./Task.js")
const morgan = require("morgan")
const fileUpload = require("express-fileupload")
const cors = require("cors")

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))
app.use(fileUpload({
  createParentPath: true
}))


mongoose.connect("mongodb+srv://zhangjizhi1021:zjz200999@cluster0.zitam.mongodb.net/102Task?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
// mongoose.connect("mongodb://localhost:27017/Task2",{useNewUrlParser:true, useUnifiedTopology:true})

app.get('/getAll',(req,res,next) => {
  Task.find({}).sort({'date':-1}).exec((err,TaskList)=>{
    if(err){
      console.log(err)
    }
    else{
      res.json(TaskList)
    }
  })
})

app.get("/:id", (req, res) => {
  const id = req.params.id;
  Task.findById(id, (err, todo) => {
    res.json(todo);
  });
});

app.delete('/deleteItem/:id',(req,res,next) => {
  const { id } = req.params;
  Task.deleteOne({ _id: id })
    .then(() => res.json({ status: "success" }))
    .catch((err) => res.json({ status: "error" }));
})

app.get("/:ExpiryDate",(req,res)=>{
  const Date = req.params.ExpiryDate;
  Task.findOne({ _ExpiryDate: Date },(err,result)=>{
    res.json(result)
  })
})

app.post('/register',(req,res) => {
    const task = new Task({
      TaskType:req.body.TaskType,
        TaskTitle : req.body.TaskTitle,
        TaskDescription : req.body.TaskDescription,
        ExpiryDate: req.body.ExpiryDate,
        TaskQuestion: req.body.TaskQuestion,
        OptionOne: req.body.OptionOne,
        OptionTwo: req.body.OptionTwo,
        OptionThree: req.body.OptionThree,
        Judgement: req.body.Judgement,
        isRequire: req.body.isRequire,
        Reward: req.body.Reward,
        Numbers:req.body.Numbers
    });

    task.save()
    .catch((err)=>console.log(err));
    res.json(('saved to db:' + task));
})

app.post("/picture", async (req, res) => {
  try {
    if(!req.files){
      res.send({
        status: false,
        message: "No files"
      })
    } else {
      const {picture} = req.files

      picture.mv("./uploads/" + picture.name)

      res.send({
        status: true,
        message: "File is uploaded"
      })
    }
  } catch (e) {
    res.status(500).send(e)
  }
})

app.listen(8000,(req,res)=>{
    console.log("Server is running on port 8000")
})

