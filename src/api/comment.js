import request from '@/utils/request'

export function fetchRawComment() {
  return request({
    url: 'http://124.220.30.8:12000/user/allAssignedComment',
    method: 'get'
  })
}
