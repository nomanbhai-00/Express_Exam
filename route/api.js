import express from "express";
const Router = express.Router()
import * as blogController from "../app/controllers/blogController.js";


//create route
Router.post("/create-blog",blogController.createBlog);


//Read Route
Router.get("/read-blog",blogController.readBlog );


//Update
Router.put("/Update-blog",blogController.UpdateBlog );


//Delete
Router.delete("/Delete-blog",blogController.DeleteBlog );

export default Router;
