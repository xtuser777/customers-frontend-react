import Customer from '../models/customer';
import Security from '../utils/security';
import axios from './axios';
import { AxiosRequestConfig } from 'axios';

class CustomerService {
  constructor() {}

  /**
   * @param {Customer} customer
   * @returns {boolean}
   */
  async create(customer) {
    try {
      const token = Security.getToken();
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      /** @type {AxiosRequestConfig} */
      const response = await axios.post('/customer', { customer });
      alert('Cliente cadastrado com sucesso!');
      return true;
    } catch (e) {
      processApiError(e);
      return false;
    }
  }

  /**
   * @param {Customer} customer
   * @returns {boolean}
   */
  async update(customer) {
    try {
      const token = Security.getToken();
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      /** @type {AxiosRequestConfig} */
      const response = await axios.put(`/customer/${customer.id}`, { customer });
      alert('Cliente atualizado com sucesso!');
      return true;
    } catch (e) {
      processApiError(e);
      return false;
    }
  }

  /**
   * @param {number} id
   * @returns {boolean}
   */
  async delete(id) {
    try {
      const token = Security.getToken();
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      /** @type {AxiosRequestConfig} */
      const response = await axios.delete(`/customer/${id}`);
      toast.success('Cliente excluído com sucesso!');
      return true;
    } catch (e) {
      processApiError(e);
      return false;
    }
  }

  /**
   * @param {number} id
   * @returns {Customer | undefined}
   */
  async getOne(id) {
    try {
      const token = Security.getToken();
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      /** @type {AxiosRequestConfig} */
      const response = await axios.get(`/customer/${id}`);
      /** @type {Customer | undefined} */
      const customer = response.data;

      return customer;
    } catch (e) {
      processApiError(e);
      return undefined;
    }
  }

  /**
   * @returns {Customer[]}
   */
  async get() {
    try {
      const token = Security.getToken();
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      /** @type {AxiosRequestConfig} */
      const response = await axios.get(`/customer`);
      /** @type {Customer[]} */
      const customers = [];
      for (const data of response.data) customers.push(data);

      return customers;
    } catch (e) {
      processApiError(e);
      return [];
    }
  }
}

export default CustomerService;
