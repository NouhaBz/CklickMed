import http from "../http-common";

class patientsDataService {
  getAll() {
    return http.get("/patients");
  }

  get(id) {
    return http.get(`/patients/${id}`);
  }

  create(data) {
    return http.post("/patients", data);
  }

  update(id, data) {
    return http.put(`/patients/${id}`, data);
  }

  delete(id) {
    return http.delete(`/patients/${id}`);
  }

  deleteAll() {
    return http.delete(`/patients`);
  }

  findByname(name) {
    return http.get(`/patients?name=${name}`);
  }
}

export default new patientsDataService();