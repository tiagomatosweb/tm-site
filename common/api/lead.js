import axios from 'axios';

const n8n = axios.create();

export const leadAPI = {
  createSubscriber(data) {
    const {n8nUrl} = useRuntimeConfig().public
    return n8n.post(`${n8nUrl}/webhook/4f93a3cf-34fe-428a-a9bb-a08b81de3846`, data)
  },
  storePreference(data) {
    console.log(data)
    const {n8nUrl} = useRuntimeConfig().public
    return n8n.post(`${n8nUrl}/webhook/2a96e52e-ec0d-4c69-8149-b0532f031f46`, data)
  },
  getSubscriber(id) {
    const {n8nUrl} = useRuntimeConfig().public
    return n8n.get(`${n8nUrl}/webhook/a6d0dae5-89aa-4b7e-b7d0-02d23c1b074?email=${id}`)
  }
}
