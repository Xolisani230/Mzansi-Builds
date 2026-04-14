const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [];
let projects=[];


app.get('/',(request, response) =>{
  response.send('WELCOME TO MZANSI BUILDS DEVELOPERS!');
});

app.post('/users', (request, response) => {
  const {username} = request.body;
  if (!username) {
    return response.status(400).json({ error:'Username is required' });
  }

  const user = {id:users.length + 1, username };
  users.push(user);
  response.status(201).json(user);
});
app.get('/users', (request, response) => {
  response.json(users);
});

app.post('/projects',(request, response) => {
  const { title, ownerId} =request.body;
  if(!title || !ownerId){
    return response.status(400).json({error:' title and ownerId are required'});
  }
  const project = {
    id: projects.length + 1,
    title,
    ownerId,
    milestones: [],
    comments: [],
    completed: false
  };
  projects.push(project);
response.status(201).json(project);
  });
app.get('/projects', (request,response) => {
  response.json(projects);
});

 app.post('/projects/:id/milestones', ( request,response) => {
  const id = parseInt(request.params.id);
  const {description } = request.body;

  const project = projects.find(p => p.id === id);
  if(!project) {
    return response.status(404).json({error:'project not found'});
    
 }
 if(!description){
  return response.status(400).json({ error: 'Description is required'});
 };

 const milestone = {
  id: project.milestones.length + 1,
   description

};

project.milestones.push(milestone);
response.status(201).json(milestone);
 });
app.get('/projects/:id/milestones',(request, response) => {
  const id = parseInt(request.params.id);
  const project = projects.find(p => p.id ===id);
  if(!project){ 
    return response.status(404).json({ error: 'Project not found'});
  }
  response.json(project.milestones);
});

 app.post('/projects/:id/comments',(request, response) => {
  const id = parseInt(request.params.id);
  const { userId, text} = request.body;

  const project = projects.find(p => p.id=== id);
  if(!project) {
    return response.status(404).json({ error:'project not found'});
 }
 if(!userId || !text){
  return response.status(400).json({error: 'userId and text are required'});
 }
 if(!users.find(u => u.id === userId)){
  return response.status(404).json({error: 'user not found'});
 }
 const comment ={
  id: project.comments.length + 1,
   text
 };
 project.comments.push(comment);
 response.status(201).json(comment);
 });
 app.get('/projects/:id/comments', (request, response) =>{
  const id = parseInt(request.params.id);
  const project = projects.find(p => p.id === id);
  if(!project){
    return response.status(404).json({ error: 'project not found'});
  }
  response.json(project.comments)
 });

 app.post('/projects/:id/complete',(request, response) => {
  const id = parseInt(request.params.id);
  const project = projects.find(p => p.id === id);
  if (!project) {
return response.status(404).json({ error:'project not found'});
 }

 project.completed = true;
 response.json({ message: 'project completed'});
});

 app.get('/celebration', ( request, response) => {
  const completed = projects.filter(p =>p.completed);
  response.json(completed);
 });
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  
});