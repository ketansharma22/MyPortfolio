import { connectToDatabse } from "./db/connection.js";
import app from "./app.js";

connectToDatabse().then(()=>{
    app.listen(5000,()=> console.log("server is open"))
}).catch((error)=> console.log(error))