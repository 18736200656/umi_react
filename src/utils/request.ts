import {fetch} from 'dva';
import config from './config';
import { message as AntdMessage } from 'antd';
function parseJSON(response: Response) {
  return response.json();
}

function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error:any = new Error(response.statusText);
  error.response = response;
  AntdMessage.error(JSON.stringify(error))
  throw error;
}

const assyParams = (obj:any) => {
  let str = ''
  for (let key in obj) {
    const value = typeof obj[key] !== 'string' ? JSON.stringify(obj[key]) : obj[key]
    str += '&' + key + '=' + value
  }
  return str.substr(1)
}
export default function request(obj:any) {
  let url:string = '';
  let options:ReqSetOptions = {
    method: obj.method,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    credentials: 'include'     //是否携带cookie，默认为omit不携带; same-origi同源携带; include同源跨域都携带
  };
  if(localStorage.token){
    options.headers.Authorization = localStorage.token
  }
  if (obj.method === 'GET' || obj.method === 'get') {
    url = (config.proxy ? obj.url : config.apiUrl + obj.url) + '?' + assyParams(obj.data);
  }
  if (obj.method === 'POST' || obj.method === 'post') {
    url = config.proxy ? obj.url : config.apiUrl + obj.url;
    options.data = obj.data;
  }
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then((data: Response) => ({ data }))
    .catch((err: errResponse) => ({ err }))
}