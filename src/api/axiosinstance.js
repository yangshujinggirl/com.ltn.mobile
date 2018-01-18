/* eslint no-param-reassign: 0*/
// ajax 工厂函数，创建一个 请求实例
/**
 * 使用demo
 * 1. 导入ajax api
 * import Ajax from './axiosinstance';
 * 2. 创建对应的ajax 实例
 * const ajax = new Ajax({
 *  baseURL:'/api' ,//  默认值是  '' 设置请求的通用api
 *  timeout:'5000' //  默认值 是5000，设置请求超时时间
 *  headers:{}   // 设置请求的头部，处理特殊的请求头部
 * })
 *
 * 备注： 以上的所有参数都可以不传
 *
 * @type {Object}
 */
import axios from 'axios';
import qs from 'qs';
import Util from '../Util';
// import { getCookie } from './Util';

const defaultHeader = {
  // Origin: 'https://www.lingtouniao.com',
  // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  // 'Access-Control-Allow-Origin': 'https://www.lingtouniao.com',
  // responseType: 'json',
  // 'Content-Type': 'application/x-www-form-urlencoded',
};

// const location = window.location.href;// 获取环境

export default ({ baseURL = '', timeout = 5000, headers = defaultHeader }) => {
  // 创建请求实体
  const axiosinstance = axios.create({
    baseURL,
    timeout,
    headers
  });
  // 请求头部拦截
  axiosinstance.interceptors.request.use((config) => {
    const { method, params = {} } = config;
    let { data = {}, url } = config;

    if (method === 'get') {
      params.clientType = 'I';
      params.sessionKey = Util.getSessionKey();
      url += '.json';
    } else if (method === 'post') {
      data.clientType = 'I';
      data.sessionKey = Util.getSessionKey();
      data = qs.stringify(data);
    } else {
      return Promise.reject({
        message: `不支持的请求${method}`
      });
    }
    config.params = params;
    config.data = data;
    config.url = url;
    return config;
  }, error => Promise.reject({
    message: error.message || '请求参数配置异常'
  }));

  // 请求响应拦截器
  axiosinstance.interceptors.response.use((response) => {
    const { resultCode, resultMessage, data } = response.data;
    if (resultCode !== '0') {
      return Promise.reject({
        message: resultMessage || '服务器异常',
        data: response.data
      });
    }
    return data;
  }, error => Promise.reject({
    message: error.message || '请求失败'
  }));
  return axiosinstance;
};
