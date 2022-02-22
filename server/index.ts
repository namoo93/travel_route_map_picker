import express from "express";
import cors from "cors";
import db from "./db";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));

// try {
//   (async () => {
//     await db.authenticate();
//   })();
//   console.log(`ORM:mysql connected`);
// } catch (e) {
//   console.log(`DB not connected: ${e}`);
// }

import memberRouter from "./routes/member";
app.use("/member", memberRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () =>
  console.log(`
############################
🛡️ APP is listening on : ${PORT}🛡️
############################
`)
);
