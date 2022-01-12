import requrest from '@/utils/request'

export function getMenu(params={}){
  return requrest({
    method:'GET',
    url: '/api/menu',
    data:params
  })
}