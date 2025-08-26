import { Sequelize } from "sequelize";
import { sequelize } from "../database";
import { initUserModel, User } from "./userModel";

initUserModel(sequelize);

export { sequelize, User };
