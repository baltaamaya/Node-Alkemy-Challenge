import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
  try {
    await sequelize.authenticate();
    app.listen(process.env.PORT || 4000);
    console.log("Server on port 4000");
  } catch (error) {
    console.error(error)
  }
  
}

main();
