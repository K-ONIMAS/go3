
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import ja from './lang/ja';
import en from './lang/en';

Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: localStorage.getItem('locale') || 'ja',
    messages: {
        ja,
        en,
    }
})
export default i18n;