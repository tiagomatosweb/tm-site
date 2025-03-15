import axios from 'axios';

export const journeyAPI = {
  getStats(framework) {
    return axios.get(`api/journeys/${framework}/stats`)
      .then(r => r.data)
  },

  getJourney(framework, step) {
    return axios.get(`api/journeys/${framework}/${step}`)
      .then(r => r.data)
  }
}
