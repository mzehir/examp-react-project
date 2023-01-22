import axios from "./axios";
import { dbConfig } from "../utils/config/config";
import { toast } from "react-toastify";
const httpStatus = require("http-status");

export const postData = async (httpType, path, data = {}) => {
  axios.defaults.baseURL = `${dbConfig.API_HOST}:${dbConfig.API_PORT}${dbConfig.API_BASE_URL}`;

  try {
    return await axios[httpType](path, data);
  } catch (err) {
    if (err.response.status === httpStatus.UNPROCESSABLE_ENTITY) {
      let errors = err.response.data.errors;
      for (let i = 0; i < errors.length; i++) {
        toast.error(errors[i].message);
      }
    } else if (err.response.status === httpStatus.UNAUTHORIZED) {
      let error = err.response.data.message;
      toast.error(error);
    } else if (err.response.status === httpStatus.NOT_FOUND) {
      let error = err.response.data.message;
      toast.error(error);
    }
  }
};
