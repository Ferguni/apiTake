"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const api_1 = __importDefault(require("./api"));
const PORT = 3333;
const app = express_1.default();

app.use(cors_1.default());
app.use(express_1.default.json());
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Welcome to a simple Github API");
}));

app.get('/', async (req, res) => __awaiter(void 0, void 0, void 0, function* (){

  
    res.redirect(`https://api.github.com/orgs/takenet/repos?per_page=5&page=1+language:C#&sort=stars&order=desc`)
  
  });
  
  
  
  app.get('/img/:img', async (req, res) => {
  
    try {
      
      const { img } = req.params
  
    res.redirect(`https://avatars.githubusercontent.com/u/4369522?v=4`);
    //Just redirect  the avatar_url because is the same for all repositories
    } catch (error) {
      console.error(error.message)
    }
  
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
    console.warn(`Server listening on port: ${PORT}`);
});