import axios from 'axios';

export const coursesAPI = {
  getFreeLectures() {
    return axios.get('api/lectures/free')
      .then(r => r.data)
  },
  getCourse(slug) {
    return axios.get(`api/courses/${slug}`)
      .then(r => r.data)
  },
}
