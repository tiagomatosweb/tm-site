import axios from 'axios';

export const coursesAPI = {
  getFreeLectures() {
    return axios.get('api/lectures/free')
  },
}
