import request from '@/utils/request'

export function fetchRawComment() {
  return request({
    url: 'http://106.52.79.36:12000/user/allAssignedComment',
    method: 'get'
  })
}
