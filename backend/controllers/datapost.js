import { model } from "mongoose"

export const dataPost=async(req,res,next)=>{
    const{name,email}=req.body
    const user=new model({name,email})
    await user.save()

}