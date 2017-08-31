<template>
  <div>
    <page-line
      :line="$t('about.line')"
      bgColor="bg-blue"
    />

    <div class="ph4 ph5-m ph6-l">
      <page-header
        :title="$t('about.title')"
        :subtitle="$t('about.subtitle')"
      />
    </div>

    <div class="ph4 ph5-m ph6-l mb5 mb6-l">
      <section class="measure-wide">
        <h2 class="mt0">{{ $t('about.philosophy.title') }}</h2>
        <p class="lh-copy" v-html="$t('about.philosophy.text')"></p>
      </section>

      <section class="pt4">
        <h2 class="mt0">{{ $t('about.team.title') }}</h2>

        <div class="flex flex-column flex-row-l center">
          <div class="w-100 mw6-m center mr3-l">
            <team
              :name="$t('about.team.julien.name')"
              :description="$t('about.team.julien.description')"
              img="/img/team/julien_grunhagel.jpg"
            >
            </team>
          </div>
          <div class="w-100 mw6-m center mh3-l mt3 mt0-l">
            <team
              :name="$t('about.team.you.name')"
              :description="$t('about.team.you.description')"
              img="/img/team/we_want_you.jpg"
            >
            </team>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
import PageHeader from '~components/pages/Header'
import PageLine from '~components/pages/Line'
import Team from '~components/Team'

export default {
  head () {
    return {
      title: this.$t('about.head.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('about.head.description') }
      ]
    }
  },
  components: {
    PageHeader,
    PageLine,
    Team
  }
}
</script>
