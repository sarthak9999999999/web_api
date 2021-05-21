"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployee = exports.updateEmployee = exports.createEmployee = exports.getEmployeebyId = exports.getEmployee = void 0;
var database_1 = require("../database");
exports.getEmployee = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, database_1.pool.query("SELECT * from employee ORDER by name ASC")];
            case 1:
                response = _a.sent();
                return [2 /*return*/, res.status(200).json(response.rows)];
            case 2:
                e_1 = _a.sent();
                console.log(e_1);
                return [2 /*return*/, res.status(400).json("Error Fetching Data!")];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getEmployeebyId = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = parseInt(req.params.id);
                return [4 /*yield*/, database_1.pool.query("SELECT * from employee where id = $1", [id])];
            case 1:
                response = _a.sent();
                return [2 /*return*/, res.json(response.rows)];
        }
    });
}); };
exports.createEmployee = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, salary, response;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, salary = _a.salary;
                return [4 /*yield*/, database_1.pool.query("INSERT INTO employee (name,salary) VALUES ($1,$2)", [name, salary])];
            case 1:
                response = _b.sent();
                return [2 /*return*/, res.json({
                        message: "Employee Successfully Added",
                        body: {
                            employee: {
                                name: name,
                                salary: salary
                            }
                        }
                    })];
        }
    });
}); };
exports.updateEmployee = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, name, salary;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = parseInt(req.params.id);
                _a = req.body, name = _a.name, salary = _a.salary;
                return [4 /*yield*/, database_1.pool.query("UPDATE employee SET name =$1 , salary = $2, id=$3", [name, salary, id])];
            case 1:
                _b.sent();
                return [2 /*return*/, res.json("Updated Sucessfully")];
        }
    });
}); };
exports.deleteEmployee = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = parseInt(req.params.id);
                return [4 /*yield*/, database_1.pool.query("DELETE from employee where id =$1", [id])];
            case 1:
                _a.sent();
                return [2 /*return*/, res.json('User sucessfully deleted!')];
        }
    });
}); };
//# sourceMappingURL=index_controller.js.map