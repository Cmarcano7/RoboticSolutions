import axios from "axios";

export default {
  getAllInfo: function() {
    return axios.get("/api/info");
  },
  getInfo: function(id) {
    return axios.get("/api/info/" + id);
  },
  getInfoBySerialNumber: function(serialNumber) {
    return axios.get("/api/info/serialNumber/" + serialNumber)
  },
  getInfoByEndUser: function(endUser) {
    return axios.get("/api/info/endUser/" + endUser)
  },
  deleteInfo: function(id) {
    return axios.delete("/api/info/" + id);
  },
  saveInfo: function(infoData) {
    return axios.post("/add/api/", infoData);
  }
};