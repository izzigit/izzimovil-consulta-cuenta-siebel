import  express from "express";
import siebelRouter from "./Routes/cvConsulta.route.js";

const app = express();
const PORT = process.env.PORT || 8898

app.use(express.json());
app.use('/cvSiebel/v1', siebelRouter)

app.listen(PORT, ()=>{
  console.log("App listening on " + PORT)
})