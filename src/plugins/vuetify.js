import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import i18n from '../i18n'

Vue.use(Vuetify);

let isAr = false

i18n.locale == 'en' ? isAr=true : isAr=false

export default new Vuetify({
    isAr,
    rtl: isAr,
});
