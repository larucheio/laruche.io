<template>
  <div>
    <page-line
      :line="$t('services.line')"
      bgColor="bg-light-purple"
    />

    <div class="ph4 ph5-m ph6-l">
      <page-header
        :title="$t('services.title')"
        :subtitle="$t('services.subtitle')"
      />
    </div>

    <div class="ph4 ph5-m ph6-l flex flex-column flex-row-l">
      <div class="w-100 w-50-l mr4-l pb4 bb bn-l b--light-gray">
        <h2 class="mt0">{{ $t('services.services[0].title') }}</h2>
        <p class="mb0 lh-copy">{{ $t('services.services[0].description') }}</p>
      </div>

      <div class="w-100 w-50-l ml4-l pv4 pt0-l bb bn-l b--light-gray">
        <h2 class="mt0">{{ $t('services.services[1].title') }}</h2>
        <p class="mb0 lh-copy">{{ $t('services.services[1].description') }}</p>
      </div>
    </div>

    <div class="ph4 ph5-m ph6-l flex flex-column flex-row-l">
      <div class="w-100 w-50-l mr4-l pv4 bb bn-l b--light-gray">
        <h2 class="mt0">{{ $t('services.services[2].title') }}</h2>
        <p class="mb0 lh-copy">{{ $t('services.services[3].description') }}</p>
      </div>

      <div class="w-100 w-50-l ml4-l pv4 bb bn-l b--light-gray">
        <h2 class="mt0">{{ $t('services.services[3].title') }}</h2>
        <p class="mb0 lh-copy">{{ $t('services.services[3].description') }}</p>
      </div>
    </div>

    <div class="ph4 ph5-m ph6-l flex flex-column flex-row-l mb5 mb6-l">
      <div class="w-100 w-50-l mr4-l pv4 pb0-l bb bn-l b--light-gray">
        <h2 class="mt0">{{ $t('services.services[4].title') }}</h2>
        <p class="mb0 lh-copy">{{ $t('services.services[4].description') }}</p>
      </div>

      <div class="w-100 w-50-l ml4-l pt4">
        <h2 class="mt0">{{ $t('services.services[5].title') }}</h2>
        <p class="mb0 lh-copy">{{ $t('services.services[5].description') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '~components/pages/Header'
import PageLine from '~components/pages/Line'

export default {
  head () {
    return {
      title: this.$t('services.head.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('services.head.description') }
      ]
    }
  },
  components: {
    PageHeader,
    PageLine
  }
}
</script>
