<template>
  <CTProfileDropdown
    :pic="pic"
    :name="name"
    :menu="menu"
  />
</template>

<script>
export default {
  name: 'ProfileDropdown',
  data: () => ({
    menu: [
      {
        name: 'My profile'
      },
      {
        name: 'Logout'
      }]
  }),
  computed: {
    pic () {
      return 'https://cdn.vuetifyjs.com/images/lists/2.jpg'
    },
    name () {
      return 'Example McExampled'
    }
  }
}
</script>
