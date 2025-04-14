import axios, { AxiosResponse } from 'axios';
import { Vessel } from '../models/Vessel';
import { Status } from '../models/Status';

const API_BASE_URL = 'http://127.0.0.1:8000/';

export class VesselApi {
  static async getAll(): Promise<Vessel[]> {
    const response: AxiosResponse<Vessel[]> = await axios.get(API_BASE_URL);
    return response.data;
  }

  static async getById(id: number): Promise<Vessel> {
    const response: AxiosResponse<Vessel> = await axios.get(`${API_BASE_URL}${id}`);
    return response.data;
  }

  static async create(vessel: Omit<Vessel, 'id'>): Promise<Vessel> {
    const response: AxiosResponse<Vessel> = await axios.post(`${API_BASE_URL}create`, vessel);
    return response.data;
  }

  static async update(id: number, vessel: Partial<Vessel>): Promise<Vessel> {
    const response: AxiosResponse<Vessel> = await axios.put(`${API_BASE_URL}update/${id}`, vessel);
    return response.data;
  }

  static async delete(id: number): Promise<Vessel> {
    const response: AxiosResponse<Vessel> = await axios.delete(`${API_BASE_URL}delete/${id}`);
    return response.data
  }
}