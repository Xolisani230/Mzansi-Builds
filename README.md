# Mzansi-Builds

Mzansi-Builds is a backend project built with **Node.js** and **Express.js**.
The main purpose is to provide a sturdy foundation for project tracking, milestones, comments and celebration.

# features
user management - create and list users
project management - create and list project
milestones - add and list milestones per project
comments - add and list comments per project
project completion tracking
celebration route to view completed projects

# installation process
clone the repo and installed dependencies:
git clone https://github.com/Xolisani230/Mzansi-Builds.git
cd Mzansi-Builds
npnm intall

Running the server :
start the server: node index.js
The server will run at http://localhost:3000

API Endpoints:
Root: GET/ - welcome message
POST/users - create a new user, example curl -X POST http://localhost:3000/users -H "Content -Type: application/json" -d "{\"username\":\"Inenceba"}"
output: {"id: 1,"username":"Inenceba"}

PROJECTS:
POST/projects - create a new project, example curl -X POST http://localhost:3000?projects -H "Content-type: application/json" -d "{\"title\":\"Mzansi Builds\", \"ownerId\":1}"
GET/projects - list all projects

MILESTONES:
POST/projects/:id/milestones- add milestone to aproject
GET/projects/:id/milestones - list milestones for a project

COMMENTS:
POST/projects/:id/comments - add comment to a project
GET/projects/:id/comments - list comments for a project

COMPLETION:
POST/projects/:id/complete - mark project as complete

CELEBRATION:
GET/celebration - list all completed projects

# progress
initialized GIt repo and connected to GItHub
added index.js with Express setup
implemented user, project,milestone, comment, completion, and celebration routes
successfully tested all endpoints with curl

# Stack
node.js
Express.js

# future improvements
integrate a database for long term storage rather than using arrays
add authentication and authorization
expand API with project collaboration features
