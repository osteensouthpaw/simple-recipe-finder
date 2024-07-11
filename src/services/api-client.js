import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://forkify-api.herokuapp.com/api/v2",
  params: {
    key: "56b449bb-56ed-42a5-adfc-baf35a0a717f",
  },
});

export { CanceledError };
