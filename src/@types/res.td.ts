declare interface Response {
  code:number,
  message?:string,
  data:object,
}
declare interface errResponse {
  code: number,
  message?: string,
}
declare interface setHead {
  'Content-Type':string,
  Authorization?:string
}
declare interface ReqSetOptions {
  method:string,
  headers: setHead,
  credentials:string,
  body?:object | string,
  data?:object
}
declare interface reqMenus {
  key:number,
  name:'',
  children?:[],
  icon:string
}