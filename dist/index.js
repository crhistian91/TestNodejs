"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const typeormdb_1 = require("./dbconfig/typeormdb");
console.clear();
const main = async () => {
    try {
        process.stdout.write('📚 Debug logs are ENABLED\n');
        process.stdout.write('🚀 Server ready at console');
        dotenv_1.default.config();
        const response = await (0, typeormdb_1.getDataSource)();
        if (!response) {
            console.log('❌ No DB Connection, Server will not start\n');
            return;
        }
        console.log('✅ DB OK, Connected\n');
    }
    catch (error) {
        console.log('Error init index APP');
        console.log(error);
    }
};
main();
//# sourceMappingURL=index.js.map