const bcrypt = require("bcrypt");

async function getSalt() {
  const salt = await bcrypt.genSalt(10);
  let hash = await bcrypt.hash("1234", salt);
  console.log(salt);
  console.log(hash);
}

getSalt();
