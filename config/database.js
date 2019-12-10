import Sequelize from "sequelize"

// Configuração de acesso ao banco de dados
const sequelize = new Sequelize('postgres://DB_USER:DB_PASS@DB_HOST:DB_PORT/DB');

export default sequelize;