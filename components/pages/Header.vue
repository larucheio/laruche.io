<template>
  <div class="pv5 f4 f2-ns center">
    <h1 class="fw6 f1 fl w-100 mt0 mb3">{{ title }}</h1>
    <p class="db lh-copy mv0 f4 f3-m f2-l measure">
      {{ subtitle }}
    </p>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'subtitle'
  ]
}
</script>
