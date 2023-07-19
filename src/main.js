import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faMinusSquare, faPlusSquare)


import { createApp } from 'vue'
import store from "./store";

import App from './App.vue'

const app = createApp(App);

app
.component('font-awesome-icon', FontAwesomeIcon)
.use(store)
.mount('#app')
