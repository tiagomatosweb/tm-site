import axios from 'axios';

export const leadAPI = {
  createSubscriber(data) {
    const {n8nUrl} = useRuntimeConfig().public
    return axios.post(`${n8nUrl}/webhook/4f93a3cf-34fe-428a-a9bb-a08b81de3846`, data)
  },
  storePreference(data) {
    const {n8nUrl} = useRuntimeConfig().public
    return axios.post(`${n8nUrl}/webhook/2a96e52e-ec0d-4c69-8149-b0532f031f46`, data)
  },
  getSubscriber(id) {
    const {n8nUrl} = useRuntimeConfig().public
    return axios.get(`${n8nUrl}/webhook/a6d0dae5-89aa-4b7e-b7d0-02d23c1b074?email=${id}`)
  }
}
