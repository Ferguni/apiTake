import express from 'express'
import http from 'http'
import cors from 'cors'
import api from './api'


const app = express()

app.use(cors())

app.use(express.json())


app.get('/', async (req, res) => {

  
  res.redirect(`https://api.github.com/orgs/takenet/repos?per_page=5&page=1+language:C#&sort=stars&order=desc`)

})



app.get('/img/:img', async (req, res) => {

  
  res.redirect(`https://avatars.githubusercontent.com/u/4369522?v=4`)
  //Just redirect  the avatar_url because is the same for all repositories

})

app.get('/name/:name', async (req, res) => {

  
  const response = await api.get(`/orgs/takenet/repos?per_page=5&page=1+language:C#&sort=stars&order=desc`)

  const { name } = response.data[req.params.name]




  const formatJson = {
    name
  }

  

  res.json(formatJson).json
})



app.get('/description/:description', async (req, res) => {
  const param = req.params

  const response = await api.get(`/orgs/takenet/repos?per_page=5&page=1+language:C#&sort=stars&order=desc`)

  const { description } = response.data[req.params.description]




  const formatJson = {
    description
  }
  
  
  res.json(formatJson).json
})


const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`Server at port:${port}`));