import axios from 'axios';

export const leadAPI = {
  storeLead(data) {
    const {n8nUrl} = useRuntimeConfig().public
    return axios.post(`${n8nUrl}/webhook/4f93a3cf-34fe-428a-a9bb-a08b81de3846`, data)
  }
}
