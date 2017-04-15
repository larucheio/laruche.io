<template>
  <div class="Content">
    <div class="container">
      <h1 class="Content__Title">{{ $t('home.title') }}</h1>
      <p>{{ $t('home.introduction') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: this.$t('home.head.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('home.head.description') }
      ]
    }
  }
}
</script>

<style>
.Content
{
  padding: 50px 0;
  text-align: center;
}
.Content__Title
{
  font-weight: 300;
  padding-bottom: 30px;
}
</style>
