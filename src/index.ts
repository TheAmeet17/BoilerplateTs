import express, { Request, Response } from 'express';


const app = express();

// Middleware for JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use("/api",[userRouter,postRouter]),


app.listen(8000, () => {
    console.log("server is running on port:8080");
  });
