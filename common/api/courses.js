import axios from 'axios';

export const coursesAPI = {
  getFreeLectures(params = {}) {
    return axios.get('api/lectures/free', {
      params
    })
      .then(r => r.data)
  },
  getCourse(slug) {
    return axios.get(`api/courses/${slug}`)
      .then(r => r.data)
  },
}
