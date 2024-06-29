import { Router } from "express";
import { dataRoute } from "./dataRoute.js";

export const baseControl=Router()

baseControl.use('/data',dataRoute)