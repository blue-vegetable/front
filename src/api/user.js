import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'http://106.52.79.36:12000/user/login',
    method: 'post',
    data
  })
}

export function register(data) {
  return request({
    url: 'http://106.52.79.36:12000/user/register/',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: 'http://106.52.79.36:12000/user/getRoleSelf',
    method: 'get'
    // params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
