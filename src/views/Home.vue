<template>
  <!-- <hello-world /> -->
  <div>
    <v-btn
      elevation="2"
      @click="switchLang"
    >Switch</v-btn>
    <p>{{lang}}</p>
    <!-- <button @click="switchLang">switch</button> -->
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  // import vuetify from '../plugins/vuetify.js'
  import i18n from '../i18n'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
    },

    methods: {
      ...mapActions(['getLang']),

      switchLang() {
        // console.log(`before: ${vuetify.userPreset.isAr}`)
        // vuetify.userPreset.isAr = !vuetify.userPreset.isAr
        i18n.locale == 'ar' ? i18n.locale = 'en' : i18n.locale = 'ar'
        console.log(`before: ${this.$vuetify.rtl}`)
        this.$vuetify.rtl = !this.$vuetify.rtl
        console.log(`after: ${this.$vuetify.rtl}`)
      }
    },

    computed: {
      ...mapGetters(['lang'])
    },

    created() {
      this.getLang()
    }
  }
</script>
