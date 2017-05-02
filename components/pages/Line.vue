<template>
  <article class="dt w-100" :class="bgColor">
    <div class="dtc v-mid tc white ph3 ph4-l">
      <h1 class="f2 f-subheadline-l fw6 tc i">{{ line }}</h1>
    </div>
  </article>
</template>

<script>
export default {
  props: [
    'line',
    'bgColor'
  ]
}
</script>
