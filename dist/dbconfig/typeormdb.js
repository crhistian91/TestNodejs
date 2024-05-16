"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataSource = void 0;
const typeorm_1 = require("typeorm");
const Home_class_1 = require("../Entities/Home.class");
let appDataSourceInstance;
const getDataSource = async () => {
    try {
        if (!appDataSourceInstance) {
            console.log('object');
            appDataSourceInstance = new typeorm_1.DataSource({
                type: 'mysql',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                synchronize: false,
                logging: false,
                entities: [
                    Home_class_1.Home,
                ],
            });
            return appDataSourceInstance.initialize();
        }
        return appDataSourceInstance;
    }
    catch (err) {
        console.log('Without connection DB');
        console.log(err);
        throw new Error(err);
    }
};
exports.getDataSource = getDataSource;
//# sourceMappingURL=typeormdb.js.map