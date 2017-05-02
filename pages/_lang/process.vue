<template>
  <div>
    <page-line
      :line="$t('process.line')"
      bgColor="bg-green"
    />

    <div class="ph4 ph5-m ph6-l">
      <page-header
        :title="$t('process.title')"
        :subtitle="$t('process.subtitle')"
      />
    </div>

    <div class="ph4 ph5-m ph6-l flex flex-column flex-row-l">
      <div class="w-100 w-50-l mr4-l pb4 bb bn-l b--light-gray">
        <h2 class="mt0">{{ $t('process.processes[0].title') }}</h2>
        <p class="mb0 lh-copy">{{ $t('process.processes[0].description') }}</p>
      </div>

      <div class="w-100 w-50-l ml4-l pv4 pt0-l bb bn-l b--light-gray">
        <h2 class="mt0">{{ $t('process.processes[1].title') }}</h2>
        <p class="mb0 lh-copy">{{ $t('process.processes[1].description') }}</p>
      </div>
    </div>

    <div class="ph4 ph5-m ph6-l flex flex-column flex-row-l mb5 mb6-l">
      <div class="w-100 w-50-l mr4-l pt4">
        <h2 class="mt0">{{ $t('process.processes[2].title') }}</h2>
        <p class="mb0 lh-copy">{{ $t('process.processes[2].description') }}</p>
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
      title: this.$t('process.head.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('process.head.description') }
      ]
    }
  },
  components: {
    PageHeader,
    PageLine
  }
}
</script>
