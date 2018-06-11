import axios from 'axios'

const Axios = axios.create({
  baseURL: '/api', // 设置请求baseURL
  timeout: 30000,
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

Axios.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)

export const get = url => {
  return body => Axios.get(url, { params: body })
}

export const getOne = url => {
  return id => Axios.get(`${url}/${id}`)
}

export const getArticlesRes = get('/article')

export const getArticleRes = getOne('/article')

export const getCategoryRes = get('/category')

export const getClassificationRes = get('/classification')

export const getPvsRes = get('/user/pvs')
