"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VesselApi = void 0;
const axios_1 = __importDefault(require("axios"));
const API_BASE_URL = 'http://127.0.0.1:8000/';
const CONFIG = {
    timeout: 5000
};
class VesselApi {
    static async getAll() {
        try {
            const response = await axios_1.default.get(API_BASE_URL, CONFIG);
            return response.data;
        }
        catch (error) {
            return this.errorHandler(error);
        }
    }
    static async getById(id) {
        try {
            const response = await axios_1.default.get(`${API_BASE_URL}${id}`, CONFIG);
            return response.data;
        }
        catch (error) {
            return this.errorHandler(error);
        }
    }
    static async getByName(name) {
        try {
            const response = await axios_1.default.get(`${API_BASE_URL}name/${name}`, CONFIG);
            return response.data;
        }
        catch (error) {
            return this.errorHandler(error);
        }
    }
    static async create(vessel) {
        try {
            const response = await axios_1.default.post(`${API_BASE_URL}create`, vessel, CONFIG);
            return response.data;
        }
        catch (error) {
            return this.errorHandler(error);
        }
    }
    static async update(id, vessel) {
        try {
            const response = await axios_1.default.put(`${API_BASE_URL}update/${id}`, vessel, CONFIG);
            return response.data;
        }
        catch (error) {
            return this.errorHandler(error);
        }
    }
    static async delete(id) {
        try {
            const response = await axios_1.default.delete(`${API_BASE_URL}delete/${id}`, CONFIG);
            return response.data;
        }
        catch (error) {
            return this.errorHandler(error);
        }
    }
    static errorHandler(error) {
        if (axios_1.default.isAxiosError(error)) {
            const err = error;
            throw new Error(`API Error: ${err.code || 'UNKNOWN'} - ${err.message}`);
        }
        throw new Error(`Unknown error occurred: ${error instanceof Error ? error.message : String(error)}`);
    }
}
exports.VesselApi = VesselApi;
