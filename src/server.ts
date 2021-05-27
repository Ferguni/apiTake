import express from 'express';
import cors from 'cors';
import api from './api';

const PORT = process.env.PORT || 3333;

const app = express();

app.use(cors());

app.use(express.json());


app.get('/', async (req, res) => {
  res.send("Welcome to a simple Github API")
})


app.post('/img/:img', async (req, res) => {


    
    const { img } = req.params

  res.redirect(`https://avatars.githubusercontent.com/u/4369522?v=4`);
  //Just redirect  the avatar_url because is the same for all repositories


});

app.get('/name/:name', async (req, res) => {

  
 try {
  const response = await api.get(`/orgs/takenet/repos?per_page=5&page=1+language:C#&sort=stars&order=desc`)

  const { name } = response.data[req.params.name]




  const formatJson = {
    name
  }

  

  res.json(formatJson);
 } catch (error) {
  console.error(error.message)

 }
});



app.get('/description/:description', async (req, res) => {
  

  try {
    const response = await api.get(`/orgs/takenet/repos?per_page=5&page=1+language:C#&sort=stars&order=desc`)

  const { description } = response.data[req.params.description]




  const formatJson = {
    description
  }
  
  
  res.json(formatJson);
  } catch (error) {
    console.error(error.message)

  }
})


// Initialize server
app.listen(PORT, () => {
  console.warn(`Server listening on port: ${PORT}`)
});