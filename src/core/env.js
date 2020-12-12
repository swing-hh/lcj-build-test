let ACTIVE_ENV_CONFIG = process.env.ACTIVE_ENV_CONFIG
if (process.env.NODE_ENV == "production") {
    if (ACTIVE_ENV_CONFIG === 'test') {//测试

    } else if (ACTIVE_ENV_CONFIG === 'prod') { //生产

    } else { //开发

    }
} else {//本地

}
export { baseURL }