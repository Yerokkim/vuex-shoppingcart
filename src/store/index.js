// vue x entry poin

import Vue from 'vue'
import foods from './modules/foods'
import Vuex from 'vuex'


Vue.use(Vuex)


export default new Vuex.Store({
    modules:{
        foods
    }
})