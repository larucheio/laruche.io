<template>
  <section class="bg-light-gray">
    <img :src="img" class="w-100" :title="name" :alt="name">
    <div class="pa3">
      <h1 class="f4 mt0">{{ name }}</h1>
      <p class="lh-copy f6 black-70">
        {{ description }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    'img',
    'name',
    'description'
  ]
}
</script>
