import Vue from 'vue'
Vue.directive('hide', (el, binding, vnode) => {
    // console.log(binding, binding.value)
    el.style.visibility = 'hidden'
})