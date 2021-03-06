require('./bootstrap');

import {createApp, h} from 'vue';
import {createInertiaApp} from '@inertiajs/inertia-vue3';
import {InertiaProgress} from '@inertiajs/progress';
import {Quasar} from 'quasar'
import quasarUserOptions from './quasar-user-options'

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Legendas';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => import(`./Pages/${name}`),
  setup({el, app, props, plugin}) {
    return createApp({render: () => h(app, props)})
      .use(plugin)
      .use(Quasar, quasarUserOptions)
      .mixin({methods: {route}})
      .mount(el);
  },
});

InertiaProgress.init({color: '#4B5563'});
