import 'dotenv/config';

import express from "express";
import cors from "cors";
import siebelRouter from "./Routes/cvConsulta.route.js";

const app = express();

const whitelist = [process.env.ORIGIN];
app.use(
  cors({
    origin: function (origin, callback) {
      console.log("URL PETICION: ", origin);
      if (!origin || whitelist.includes(origin)) return callback(null, origin);

      return callback("error de CORS: " + origin + " no autorizado");
    },
  })
);

app.use(express.json());
app.use("/cvSiebel/v1", siebelRouter);

const PORT = process.env.PORT || 8898;
app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
