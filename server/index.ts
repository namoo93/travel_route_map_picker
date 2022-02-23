import express from "express";
import cors from "cors";
import db from "./db";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));

import memberRouter from "./routes/member";
app.use("/member", memberRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, async () => {
  console.log(`
############################
🛡️ APP is listening on : ${PORT}🛡️
############################
`);
  await db
    .authenticate()
    .then(() => console.log(`Connected ✅`))
    .catch((e) => console.log(`❗ Disconnected : ${e}`));
});
