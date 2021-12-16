<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand :to="`/${$i18n.locale}`">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item :to="`/${$i18n.locale}/features`">{{ $t('nav.features') }}</b-nav-item>
                <b-nav-item :to="`/${$i18n.locale}/about`">{{ $t('nav.about') }}</b-nav-item>
                <b-nav-item :to="`/${$i18n.locale}/contact`">{{ $t('nav.contact') }}</b-nav-item>
                <b-nav-item :to="`/${$i18n.locale}/login`">{{ $t('nav.login') }}</b-nav-item>
                <b-nav-item :to="`/${$i18n.locale}/register`">{{ $t('nav.register') }}</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <!-- <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown text="Lang" :v-model="$i18n.locale">
                    <b-dropdown-item v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang" @click="showLang">
                        {{ lang }}
                    </b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav> -->
            <locale-changer />
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import LocaleChanger from '../components/LocaleChanger'

export default {
    name: 'Navbar',
    components: {
        LocaleChanger
    }
}
</script>

