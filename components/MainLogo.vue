<template>
  <div class="ct-logo">
    <span class="ct-logo-text">
      {{ logo }}
    </span>
    <img
      class="ct-logo-image"
      :alt="title"
      :src="logo"
    >
  </div>
</template>

<script>
export default {
  computed: {
    title () {
      return this.$settings.title || 'Community Tools'
    },
    logo () {
      return this.$settings.logo || 'img/logo.svg'
    }
  }
}
</script>

<style scoped>
.ct-logo {
  position: relative;
}

.ct-logo-image {
  width: 100%;
}

.ct-logo-text {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>
