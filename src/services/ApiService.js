import { axios } from "@/plugins/axios";

export class ApiService {
  constructor(Resource) {
    this.Resource = Resource;
  }

  async queryFilter(filter) {
    return await axios.get(this.Resource, { params: filter }).then(response => response.data);
  }

  async queryAll() {
    return await axios.get(this.Resource).then(response => response.data);
  }

  async queryOne(id) {
    return await axios.get(`${this.Resource}/${id}`).then(response => response.data);
  }

  async createOne(data) {
    return await axios.post(this.Resource, data).then(response => response.data);
  }

  async createUser(data) {
    return await axios.post('register', data).then(response => response.data);
  }

  async updateOne(id, data) {
    return await axios.put(`${this.Resource}/${id}`, data).then(response => response.data);
  }

  async deleteOne(id) {
    return await axios.delete(`${this.Resource}/${id}`).then(response => response.data);
  }


}
