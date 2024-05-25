import express from "express";
import db from "./db";
import { Router } from "express";
 import{
    getAll,
    create,
    updateId,
    deleteId
 } from "./controllers"
const app = express();
const port = 3000;
const router = Router();


app.use(express.json());
 
router.get('/',getAll)
router.post('/',create)
router.put('/:id',updateId)
router.delete('/:id',deleteId)

(async () => {
    await db.getConnection();
    console.log("connected to database 🎉");
  
    app.listen(port, () => {
      console.log(`app is running on port ${port}`);
    });
  })();