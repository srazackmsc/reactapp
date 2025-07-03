import axios from "axios";
import config from "../../config/config";

const ROOT_URL = config.API_BASE_URL;
const PolicyServices = {
  fetchPolicyById: (pid) => {
    try {
      return axios.get(ROOT_URL + "/policies?Policy_No=" + pid);
    } catch (e) {
      throw e;
    }
  },
};

export default PolicyServices;
