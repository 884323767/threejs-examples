import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import animated from 'animate.css' // npm install animate.css --save安装，在引入

Vue.use(animated)
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
