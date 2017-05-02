<template>
  <div>
    <page-line
      :line="$t('contact.line')"
      bgColor="bg-gold"
    />

    <div class="ph4 ph5-m ph6-l">
      <page-header
        :title="$t('contact.title')"
        :subtitle="$t('contact.subtitle')"
      />
    </div>

    <section class="tc mb5 mb6-l">
      <a href="mailto:hi@laruche.io" class="dib f1-ns f2 no-underline gold ba bg-animate hover-bg-gold hover-white pa3">hi@laruche.io</a>
    </section>
  </div>
</template>

<script>
import PageHeader from '~components/pages/Header'
import PageLine from '~components/pages/Line'

export default {
  head () {
    return {
      title: this.$t('contact.head.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('contact.head.description') }
      ]
    }
  },
  components: {
    PageHeader,
    PageLine
  }
}
</script>
