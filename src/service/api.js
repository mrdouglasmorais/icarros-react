import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://webhook.site/ca3b2bfa-dc9e-4c6a-84df-0668f16aff7a'
});
export const authAPI = axios.create({
  baseURL: 'https://sistemadeagendamentogama.herokuapp.com/'
})
