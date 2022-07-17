import {Sequelize} from "sequelize";
 
const db = new Sequelize('crudd_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db;