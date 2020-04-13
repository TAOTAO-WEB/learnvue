// import axios from 'axios'
// import qs from 'qs'
// import {Vue} from 'vue/types/vue'
//
//
// Vue.prototype.$axios = axios;
// axios.defaults.baseURL = 'http://localhost:2333/';
// axios.defaults.timeout = 10000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//
// // 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//   // 参数格式转换
//   if(config.method==="post"){
//     config.data = qs.stringify(config.data);
//   }
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });
