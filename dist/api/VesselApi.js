"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VesselApi = void 0;
const axios_1 = __importDefault(require("axios"));
const API_BASE_URL = 'http://127.0.0.1:8000/';
class VesselApi {
    static async getAll() {
        const response = await axios_1.default.get(API_BASE_URL);
        return response.data;
    }
    static async getById(id) {
        const response = await axios_1.default.get(`${API_BASE_URL}${id}`);
        return response.data;
    }
    static async create(vessel) {
        const response = await axios_1.default.post(`${API_BASE_URL}create`, vessel);
        return response.data;
    }
    static async update(id, vessel) {
        const response = await axios_1.default.put(`${API_BASE_URL}update/${id}`, vessel);
        return response.data;
    }
    static async delete(id) {
        const response = await axios_1.default.delete(`${API_BASE_URL}delete/${id}`);
        return response.data;
    }
}
exports.VesselApi = VesselApi;
