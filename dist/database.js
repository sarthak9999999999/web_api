"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
var pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    password: "Flstudio9#",
    database: "employee_system",
    port: 5432
});
//# sourceMappingURL=database.js.map