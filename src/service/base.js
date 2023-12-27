// 封装axios
const axios = require('axios')
const ERR_OK = 0
const url = '/'
axios.default.baseURL = url

export function get (url, params) {
  return axios.get(url, { params })
    .then(res => {
      const serverData = res.data
      if (serverData.code === ERR_OK) {
        return serverData.result
      }
    }).catch(err => {
      console.log(err)
    })
}
