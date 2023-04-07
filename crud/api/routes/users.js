import express from "express";
import { addUser, deleteUser, getUsers, updateUser } from "../controllers/user.js";

const router = express.Router() //indicando que aqui será uma rota

router.get("/", getUsers)//parâmetro de barra indicando que o get vai ser na raiz dessa rota

router.post("/", addUser)

router.put("/:id", updateUser)

router.delete("/:id", deleteUser)

export default router
