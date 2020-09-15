import { axios } from "@/plugins/axios";

export class ApiService {
  constructor(Resource) {
    this.Resource = Resource;
    this.Token = { 'Authorization': `Bearer ${localStorage.getItem('token')}` };
  }

  async queryAll() {
    return await axios.get(this.Resource, { headers: this.Token })
      .then(response => response.data);
  }

  async queryOne(id) {
    return await axios.get(`${this.Resource}/${id}`, { headers: this.Token })
      .then(response => response.data);
  }

  async queryFilter(filter) {
    return await axios.get(this.Resource, { headers: this.Token ,params: filter })
      .then(response => response.data);
  }

  async createOne(data) {
    return await axios.post(this.Resource, data, { headers: this.Token })
      .then(response => response.data);
  }

  async updateOne(id, data) {
    return await axios.put(`${this.Resource}/${id}`, data, { headers: this.Token })
      .then(response => response.data);
  }

  async deleteOne(id) {
    return await axios.delete(`${this.Resource}/${id}`, { headers: this.Token })
      .then(response => response.data);
  }

  // Controle de usuário (Auth de login, Criação)
  async login(data) {
    return await axios.post(this.Resource, data)
      .then(response => response.data);
  }

  async createUser(data) {
    return await axios.post('register', data)
      .then(response => response.data);
  }
}
