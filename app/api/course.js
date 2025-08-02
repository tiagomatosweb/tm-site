import axios from "axios";

export const courseAPI = {
  list: (params) => axios.get('/api/courses', {params}),
}