'use strict'
let USE_DEFAULT_ENV_CONFIG = true;
let DEFAULT_ENV_CONFIG = 'prod';
let ACTIVE_ENV_CONFIG;
let allowed_envs = ['dev', 'test', 'prod'];

let npm_config_argv = process.env.npm_config_argv;
if (npm_config_argv) {
  //解析使用参数所激活的环境参数,存在时取消默认使用的环境
  let npm_config_argv_obj = JSON.parse(npm_config_argv);
  //.npmrc具体配置信息 npm_config_argv: '{"remain":[],"cooked":["run","dist"],"original":["run","dist]}',
  let original = npm_config_argv_obj.original;

  if (original && original.length == 3) {
    USE_DEFAULT_ENV_CONFIG = false;
    //获取传入环境参数
    ACTIVE_ENV_CONFIG = original[2].replace("--", ""); //--dev --test
    //console.log("current active env config : " + ACTIVE_ENV_CONFIG);
    //验证必须为其中之一
    let allowed = false;
    for (let i in allowed_envs) {
      let env = allowed_envs[i];
      if (env === ACTIVE_ENV_CONFIG) {
        allowed = true;
        break;
      }
    }

    if (!allowed) {
      throw new Error("the active env config error : " + ACTIVE_ENV_CONFIG);
    }

    let reset_params = true;
    if (reset_params) {
      original.splice(2, 1);
      let cooked = npm_config_argv_obj.cooked;
      if (cooked) {
        let cooked_lenght = cooked.length;
        if (cooked_lenght >= 3 && cooked[cooked_lenght - 1] === "--" + ACTIVE_ENV_CONFIG) {
          cooked.splice(cooked_lenght - 1, 1);
        }
      }
      process.env.npm_config_argv = JSON.stringify(npm_config_argv_obj);
    }
  }
}

if (USE_DEFAULT_ENV_CONFIG) {
  ACTIVE_ENV_CONFIG = DEFAULT_ENV_CONFIG;
}

module.exports = {
  NODE_ENV: '"production"',
  //当前所应用的env config
  ACTIVE_ENV_CONFIG: '"' + ACTIVE_ENV_CONFIG + '"',
  //当前是否使用默认的env config(若为true,则development环境应用为dev,反之则应用为ACTIVE_ENV_CONFIG)
  USE_DEFAULT_ENV_CONFIG: USE_DEFAULT_ENV_CONFIG,
  //配置不同环境的属性值 (通过process.env[process.env.ACTIVE_ENV_CONFIG] 获取对应的值)
  // 根据不同的需求配置不同的参数和接口地址

  // 本地环境接口地址
  dev: {
    // API_PATH: '"http://127.0.0.1:9999"'
    API_PATH: '"http://dev.wqkaoshi.cn:8088/"'
  },
  // 测试环境接口地址
  test: {
    API_PATH: '"http://api.test.wqkaoshi.cn/"'
    //http://ebook.wqketang.net/
  },
  // 生产环境接口地址
  prod: {
    API_PATH: '"https://apik.wqketang.com/"'
  }
}

