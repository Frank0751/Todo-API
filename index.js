
import express from 'express'
import mongoose from 'mongoose';
import todoRouter from './routes/todo.js';
import userRouter from './routes/user.js';

//connect to database
await mongoose.connect('mongodb+srv://todo-api:todo-api@mest-backend-projects.inq84.mongodb.net//todo-db?retryWrites=true&w=majority&appName=mest-backend-projects')
//create an express app
const app = express();

//Define routes
// app.get('/hello', (req, res, next) => {
// console.log(req.headers);
// res.json('You visited the hello endpoint!');
// });

// app.get('/goodbye', (req, res, next) => {
//     console.log(req.query);
//     res.json('same to you')
// })

app.use(todoRouter);
app.use(userRouter);
//listen for incoming requests
app.listen(3000, () => {
    console.log('App is listening on port 3000');
});