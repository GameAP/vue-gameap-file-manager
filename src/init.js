import store from './store';

/* Fix https://github.com/JeffreyWay/laravel-mix/issues/2064#issuecomment-511364566 */
import blank from './blank.scss';

const FileManager = () => import('./FileManager' /* webpackChunkName: "js/file-manager" */);

/**
 * Install
 *
 * options = {
 *   store, // required
 *
 *   // not required params
 *   headers: {'Authorization': 'Bearer ...'}, // add header
 * OR
 *   headers: {'X-CSRF-TOKEN': 'token'}, // overwrite default header Axios
 *   baseUrl: 'http://my_url:80/file-manager/', // overwrite base url Axios
 *   windowsConfig: 2, // overwrite config
 *   lang: 'de',
 *   translation: {
 *     name: de,
 *     content: {
 *       about: 'Über',
 *       back: 'Zurück',
 *       ... see lang file structure
 *     },
 *   },
 * }
 *
 * @param Vue
 * @param options
 */
export default function install(Vue, options = {}) {
  if (!options.store) console.error('Please provide a store!!');

  Vue.component('file-manager', FileManager);

  options.store.registerModule('fm', store);

  options.store.commit('fm/settings/manualSettings', options);
}
