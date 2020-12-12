import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'

let vm = new Vue()
// axios.defaults.timeout = 5000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/json';        //配置请求头
let ACTIVE_ENV_CONFIG = process.env.ACTIVE_ENV_CONFIG
// 获取配置环境的公共参数值
let envParams = process.env[ACTIVE_ENV_CONFIG]
axios.defaults.baseURL = envParams.API_PATH
//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
    //在发送请求之前做某件事
    config.validateStatus = function (status) {//状态码返回
        return status >= 200 && status < 300
    }
    return config;
}, (error) => {
    // console.log('错误的传参')
    return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
    return res
}, (error) => {
    return Promise.reject(error);
});

//返回一个Promise(发送post请求)
export function fetchPost(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                //console.log(error)
                reject(error)
            })
    })
}
////返回一个Promise(发送get请求)
export function fetchGet(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(url, { params: param })
            .then(response => {
                resolve(response);
            }, err => {
                // console.log(err)
                reject(err)
            })
            .catch((error) => {
                // console.log(error)
                reject(error)
            })
    })
}
//返回一个Promise(发送put请求)
export function fetchPut(url, params) {
    return new Promise((resolve, reject) => {
        axios.put(url, params)
            .then(response => {
                resolve(response);
            }, err => {
                // console.log(err)
                reject(err);
            })
            .catch((error) => {
                // console.log(error)
                reject(error)
            })
    })
}
//返回一个Promise(发送delete请求)
export function fetchDelete(url, params) {
    return new Promise((resolve, reject) => {
        axios.delete(url, { params: params })
            .then(response => {
                resolve(response);
            }, err => {
                // console.log(err)
                reject(err);
            })
            .catch((error) => {
                // console.log(error)
                reject(error)
            })
    })
}
//返回一个Promise(发送delete请求)
export function fetchPostAuth(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response);
            }, err => {
                // console.log(err)
                reject(err);
            })
            .catch((error) => {
                // console.log(error)
                reject(error)
            })
    })
}

export default {
    fetchPost,
    fetchGet,
    fetchPut,
    fetchDelete,
    fetchPostAuth
}
