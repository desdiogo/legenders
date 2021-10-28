require('./bootstrap')

import {createApp, h} from 'vue'
import {createInertiaApp} from '@inertiajs/inertia-vue3'
import {InertiaProgress} from '@inertiajs/progress'
import { Quasar, Notify, Loading } from 'quasar'

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => import(`./Pages/${name}`),
  setup({el, app, props, plugin}) {
    return createApp({render: () => h(app, props)})
      .use(plugin)
      .use(Quasar, {
        plugins: {
          Notify,
          Loading
        },
        config: {
          notify: {
            textColor: 'white',
            position: 'top',
            actions: [
              { icon: 'close', color: 'white', attrs: { 'aria-label': 'Dismiss' } }
            ],
            timeout: 5000
          }
        }
      })
      .mixin({methods: {route}})
      .mount(el);
  },
});

InertiaProgress.init({color: '#4B5563'});
