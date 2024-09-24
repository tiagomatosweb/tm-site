import axios from 'axios';

export const leadAPI = {
  storeLead(data) {
    return axios.post('https://n8n.laravue.com.br/webhook/4f93a3cf-34fe-428a-a9bb-a08b81de3846', data)
  }
}
