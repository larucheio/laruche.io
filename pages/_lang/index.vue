<template>
  <div>
    <div class="w-100 h-100-minus-menu ph3 ph4-l pt6 cover bg-center bg-img-geneva">
      <h1 class="f2 f-subheadline-l fw6 tc i ma0 white tc">{{ $t('home.line') }}</h1>
    </div>

    <div class="ph4 ph5-m ph6-l">
      <page-header
        title=""
        :subtitle="$t('home.subtitle')"
      />
    </div>
  </div>
</template>

<script>
import PageHeader from '~components/pages/Header'

export default {
  head () {
    return {
      title: this.$t('home.head.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('home.head.description') }
      ]
    }
  },
  components: {
    PageHeader
  }
}
</script>
