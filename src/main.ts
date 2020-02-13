import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'

Vue.config.productionTip = false

export async function createApp ({
          beforeApp = (bv: any) => {},
          afterApp = (av: any) => {}
        } = {}) {
          const router = createRouter()
          const store = createStore()
          

          await beforeApp({
            router,
            store,
            
          })

          const app = new Vue({
  router,
  store,
  render: h => h(App)
})

          const result = {
            app,
            router,
            store,
            
          }

          await afterApp(result)

          return result
        }
