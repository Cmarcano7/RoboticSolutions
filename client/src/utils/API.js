import axios from "axios";

export default {
  getAllInfo: function() {
    return axios.get("/api/info");
  },
  getInfo: function(id) {
    return axios.get("/api/info/" + id);
  },
  getInfoBySerialNumber: function(serialNumber) {
    return axios.get("/api/info/" + serialNumber)
  },
  getInfoByEndUser: function(endUser) {
    return axios.get("/api/info/" + endUser)
  },
  deleteInfo: function(id) {
    return axios.delete("/api/info/" + id);
  },
  saveInfo: function(bookData) {
    return axios.post("/api/info", bookData);
  }
};