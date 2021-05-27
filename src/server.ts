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

app.get('/:repo', async (req, res) => {
  try {
    const { repo } = req.params

    // const { title, author } = req.query
  
    /** 
     * O @title que eu tiro do req.query é os parâmetros que vem depois
     * do "?", então caso você queira pegar mais informações é só ir adicionando
     * nos query params e você pode colocar quantos quiser
     * 
     * http://localhost:3333/fireheet?title=blambers
     * 
     * Por exemplo se você quiser pegar tipo, o nome do autor e titulo iria ficar
     * 
     * http://localhost:3333/fireheet?title=blambers&author=robison
     * 
     * O "&" separa os parâmetros, e ai pra pegar pra usar no código é só colocar
     * o nome do parâmetro q você espera, ali junto na declaração do title, que ai
     * ficaria do jeito que ta comentado embaixo
    */

    const response = await api.get(`/orgs/${repo}/repos`)
  
    if (!response) {
      throw new Error('Repository not found')
    }
  
    const { owner } = response.data[0]
    
    res.json(owner.url)
  }
  catch (error) {
    console.error(error.message)
  }
  
});


// Initialize server
app.listen(PORT, () => {
  console.warn(`Server listening on port: ${PORT}`)
});