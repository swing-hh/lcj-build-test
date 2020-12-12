<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 class="animated rubberBand">几个简单用法简介</h2>
    <ul>
      <li class="animated bounceInLeft">
        <h6>接口调用：</h6>
        <p>文件请见：core/http.js 使用：this.$http.fetchGet(apiUrl,{}).then(res => {})</p>
      </li>
      <li class="animated bounceInRight">
        <h6>公共文件：</h6>
        <p>样式公共文件请见：assets/common.css 使用：&lt;div class='flex'&gt;&lt;/div&gt;</p>
        <p>逻辑公共文件请见：core/common.js 使用：this.Common.toLine()</p>
      </li>
      <li class="animated bounceInLeft">
        <h6>全局公共组件：</h6>
        <p>
          文件请见：core/componets.js 使用：
          &lt;HelloWorld&gt;&lt;/HelloWorld&gt;
        </p>
      </li>
      <li class="animated bounceInRight">
        <h6>自定义指令：</h6>
        <p>文件请见：core/directive.js 使用：v-hide</p>
      </li>
      <li class="animated bounceInLeft">
        <h6>打包命令：</h6>
        <p>文件请见：config/prod.env 使用命令：npm run build --[dev|test|prod]</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "感谢使用lcj上传的公共项目文件！"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
h1,
h2 {
  font-weight: normal;
}
h2 {
  color: #0cc;
}
ul {
  list-style-type: none;
  padding: 0;
  font-size: 16px;
}
li {
  display: block;
  width: 520px;
  margin: 0 auto 16px;
  text-align: left;
  h6 {
    color: #0cc;
    font-size: 16px;
    margin: 0;
  }
  p {
    margin: 8px 0 0;
  }
}
</style>
