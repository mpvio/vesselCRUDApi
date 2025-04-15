import axios, { AxiosError, AxiosResponse } from 'axios';
import { Vessel } from '../models/Vessel';

const API_BASE_URL = 'http://127.0.0.1:8000/';
const CONFIG = {
  timeout: 5000
};

export class VesselApi {
  static async getAll(): Promise<Vessel[]> {
    try {
      const response: AxiosResponse<Vessel[]> = await axios.get(API_BASE_URL, CONFIG);
      return response.data;
    } catch (error) {
      return this.errorHandler(error)
    }
  }

  static async getById(id: number): Promise<Vessel> {
    try {
      const response: AxiosResponse<Vessel> = await axios.get(`${API_BASE_URL}${id}`, CONFIG);
      return response.data;
    } catch (error) {
      return this.errorHandler(error)
    }
  }

  static async getByName(name: string): Promise<Vessel[]> {
    try {
      const response: AxiosResponse<Vessel[]> = await axios.get(`${API_BASE_URL}name/${name}`, CONFIG);
      return response.data;
    } catch (error) {
      return this.errorHandler(error)
    }
  }

  static async create(vessel: Omit<Vessel, 'id'>): Promise<Vessel> {
    try {
      const response: AxiosResponse<Vessel> = await axios.post(`${API_BASE_URL}create`, vessel, CONFIG);
      return response.data;
    } catch (error) {
      return this.errorHandler(error)
    }
  }

  static async update(id: number, vessel: Partial<Vessel>): Promise<Vessel> {
    try {
      const response: AxiosResponse<Vessel> = await axios.put(`${API_BASE_URL}update/${id}`, vessel, CONFIG);
      return response.data;
    } catch (error) {
      return this.errorHandler(error)
    }
  }

  static async delete(id: number): Promise<Vessel> {
    try {
      const response: AxiosResponse<Vessel> = await axios.delete(`${API_BASE_URL}delete/${id}`, CONFIG);
      return response.data
    } catch (error) {
      return this.errorHandler(error)
    }
  }

  private static errorHandler(error: unknown): never {
    if (axios.isAxiosError(error)) {
      const err = error as AxiosError;
      throw new Error(`API Error: ${err.code || 'UNKNOWN'} - ${err.message}`);
    }
    throw new Error(`Unknown error occurred: ${error instanceof Error ? error.message : String(error)}`);
  }
}