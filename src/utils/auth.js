import Cookies from 'js-cookie'

const TokenKey = '123'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

const myToken = 'myToken'
export function getMyToken() {
  return Cookies.get(myToken)
}

export function setMyToken(token) {
  return Cookies.set(myToken, token)
}

export function removeMyToken() {
  return Cookies.remove(myToken)
}
