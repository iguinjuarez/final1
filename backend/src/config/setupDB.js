require("dotenv").config({ path: "../.env" });
const { Sequelize } = require("sequelize");

let seqInstance = null;

const createInstance = async () => { 
  const instance = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false, // Desactiva los logs de SQL en consola
  });
  try {
    await instance.authenticate();
    console.log('Conexión establecida correctamente');
    return instance;
  } catch (err) {
    console.log("DB_HOST:", process.env.DB_HOST);
    throw new Error(`Unable to connect to database`);
  }
};

const getInstance = async () => {
if (!seqInstance) {
  seqInstance = await createInstance();
}
  return seqInstance;
};

module.exports = {
getInstance,
createInstance,
};