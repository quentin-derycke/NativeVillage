import config from "../../config.json";
import axios from "axios";

/* Request for Categories */

export const Categoriesloader = async () => {
  return (await axios.get(`${config.URL}/categories.json`)).data;
};
