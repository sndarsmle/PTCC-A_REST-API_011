import { Sequelize } from "sequelize";

const db = new Sequelize('tcc_t2', 'root', '', {
    host : 'localhost',
    dialect : 'mysql'
});

export default db;
