import { Router } from "express";
import { dataPost } from "../controllers/datapost.js";

export const dataRoute=Router()
dataRoute.post('/post',dataPost)