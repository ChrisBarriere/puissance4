import Vue from 'vue';

import './styles/quasar.styl';
import 'quasar/dist/quasar.ie.polyfills';
import iconSet from 'quasar/icon-set/mdi-v4';
import lang from 'quasar/lang/fr';
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/mdi-v4/mdi-v4.css';
import {
  Quasar,
  QBtn,
  QBanner,
  QCircularProgress,
  QIcon,
  QInput,
  Notify,
} from 'quasar';

Vue.use(Quasar, {
  config: {},
  components: {
    QBtn,
    QBanner,
    QCircularProgress,
    QIcon,
    QInput,
  },
  directives: {
  },
  plugins: {
    Notify,
  },
  lang,
  iconSet,
});
