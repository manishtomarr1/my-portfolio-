const express = require('express')
const app = express()
const port = 3000

app.use (express.static("public"))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})


app.post('/skills', (req, res) => {
  res.sendFile(__dirname + "/skills.html")
})


app.post('/back', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post('/education' ,(req,res) => {
  res.sendFile(__dirname + "/education.html")
})

app.post('/project' ,(req,res) => {
  res.sendFile(__dirname + "/project.html")
})

app.post('/work-exp' ,(req,res) => {
  res.sendFile(__dirname + "/work-exp.html")
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
