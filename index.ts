import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
import db from './models';
// import { users } from './seeders/users';
// import { projects } from './seeders/projects'
// import { projectassignments } from './seeders/projectassignments'

// const createSeed = () => {
    // users.map((user)=>{
    //     db.User.create(user)
    // });
    // projects.map((project) => {
    //     db.Project.create(project)
    // });
//     projectassignments.map((ps) => {
//         db.ProjectAssignment.create(ps)
//     });

// }
// createSeed();
app.get('/users',(req,res)=>{
db.User.findAll({
    include:{
        model:db.Project
    }
}).then((result: object) => {
   res.send(result)
}).catch((error: object) => {
    res.send(error)
})
})

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port ${PORT}`)
    })
})