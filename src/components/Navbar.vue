<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand to="/">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/features">{{ $t('nav.features') }}</b-nav-item>
                </b-navbar-nav>
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

