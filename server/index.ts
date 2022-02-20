import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));

// const db =

import memberRouter from "./routes/member";
app.use("/member", memberRouter);

app.listen(PORT, () =>
  console.log(`
############################
🛡️ APP is listening on : ${PORT}🛡️
############################
`)
);
