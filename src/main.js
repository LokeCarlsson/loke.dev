import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";
import VueDisqus from 'vue-disqus'
import VTooltip from 'v-tooltip'

import "@/assets/code-highlight.css"

import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faTwitter,
  faFacebook,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faTwitter, faFacebook, faLinkedin, faEnvelope, faPlayCircle)

export default function (Vue, {
  head
}) {
  Vue.use(VueDisqus)
  Vue.use(VTooltip)
  Vue.component('font-awesome', FontAwesomeIcon)
  Vue.component("Layout", DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  }
}
