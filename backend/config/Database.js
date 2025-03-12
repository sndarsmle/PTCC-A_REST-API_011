import { Sequelize } from "sequelize";

const db = new Sequelize('tcc_t2', 'root', 'lingkarankecil', {
    host : '130.211.201.103',
    dialect : 'mysql'
});

export default db;
