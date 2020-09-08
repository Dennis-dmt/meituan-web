import axios from 'axios';

const $axios = axios.create({
  baseURL: 'http://open.duyiedu.com'
})

$axios.interceptors.request.use(request => {
  request = {
    ...request,
    params: {
      ...request.params,
      appkey: "15000390985_1572490271792",
    },
    url: `/api/meituan${request.url}${(request.url == '/login' || request.url == '/register') ? '' : '.json'}`
  }
  return request;
})

$axios.interceptors.response.use(response => {
  if (response.status === 200) {
    if (response.config.url.includes('login') || response.config.url.includes('register')) {
      return response.data
    } else {
      return response.data.data
    }
  }
  return response;
})

export default $axios