import { Member } from "../models/member";

const create_table_member = async () => {
  await Member.sync({ force: true })
    .then(() => {
      console.log(`Member Migration ✅`);
    })
    .catch((e) => {
      console.log(`Member Migration ❌ : ${e}`);
    });
};

create_table_member();
