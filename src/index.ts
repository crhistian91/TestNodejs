import dotenv from 'dotenv';
import { getDataSource } from './dbconfig/typeormdb';

// limpiar la consola
console.clear();

const main = async () => {
  try {
    process.stdout.write('📚 Debug logs are ENABLED\n');
    process.stdout.write('🚀 Server ready at console');
    // inicializaron de variables de entorno
    dotenv.config();

    // Se realiza conexión con Base de datos
    const response = await getDataSource();
    if (!response) {
      console.log('❌ No DB Connection, Server will not start\n');
      return;
    }
    console.log('✅ DB OK, Connected\n');
  } catch (error) {
    console.log('Error init index APP');
    console.log(error);
  }
};

main();
