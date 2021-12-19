
import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
import ja from './lang/ja';
import en from './lang/en';
const i18n = new VueI18n({
    locale: localStorage.getItem('locale') || 'ja',
    messages: {
        ja,
        en,
    }
})
export default i18n;