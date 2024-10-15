import { Router } from "express";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todo.js";
import { localUpload, todoIconUpload, userAvatarUpload,  } from "../middlewares/upload.js";
//Create a router
const todoRouter = Router();

//Defir=ne routes
todoRouter.post('/todos', todoIconUpload.single('icon'), addTodo);

todoRouter.get('/todos', getTodos);

todoRouter.patch('/todos/:id', updateTodo);
todoRouter.delete('/todos/:id', deleteTodo);



todoRouter.post('/todos', userAvatarUpload.single('icon'), addTodo);

todoRouter.get('/todos', getTodos);

todoRouter.patch('/todos/:id', updateTodo);
todoRouter.delete('/todos/:id', deleteTodo);
//Export router

export default todoRouter; 