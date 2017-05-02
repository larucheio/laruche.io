<template>
  <div class="fixed w-100 bg-white top-0">
    <nav class="flex justify-between">

      <nuxt-link class="flex items-center link black hover-gold pa3" :to="path('/')" title="laruche" active-class="none">
        <img src="~assets/img/laruche-logo.svg" alt="laruche's logo" class="h2 mr3">
        <span class="f4">laruche</span>
      </nuxt-link>

      <input id="toggle" class="dn" type="checkbox" autocomplete="off">
      <label class="menu_toggle flex flex-column justify-center order-2 dn-l pa3" for="toggle">
        <div class="menu_toggle__bar w2 bg-gray"></div>
        <div class="menu_toggle__bar w2 bg-gray"></div>
        <div class="menu_toggle__bar w2 bg-gray"></div>
        <p class="ma0 f6 gray">menu</p>
      </label>

      <div class="menu flex-l order-1 overflow-auto fixed static-l w-100 w-auto-l h-100 h-auto-l bg-white">
        <nuxt-link class="flex items-center hover-gold bl bw2 b--light-red bn-l link black pa3" :to="path('/')" exact>
          {{ $t('links.home') }}
        </nuxt-link>
        <nuxt-link class="flex items-center hover-gold bl bw2 b--light-red bn-l link black pa3" :to="path('/services')">
          {{ $t('links.services') }}
        </nuxt-link>
        <nuxt-link class="flex items-center hover-gold bl bw2 b--light-red bn-l link black pa3" :to="path('/process')">
          {{ $t('links.process') }}
        </nuxt-link>
        <nuxt-link class="flex items-center hover-gold bl bw2 b--light-red bn-l link black pa3" :to="path('/about')">
          {{ $t('links.about') }}
        </nuxt-link>

        <nuxt-link class="flex items-center hover-gold bl bw2 b--pink bn-l link black pa3" v-if="$i18n.locale === 'en'" :to="`/fr` + $route.fullPath" active-class="none">
          {{ $t('links.french') }}
        </nuxt-link>
        <nuxt-link class="flex items-center hover-gold bl bw2 b--pink bn-l link black pa3" v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" active-class="none">
          {{ $t('links.english') }}
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    path (url) {
      return (this.$i18n.locale === 'en' ? url : '/' + this.$i18n.locale + url)
    }
  }
}
</script>
