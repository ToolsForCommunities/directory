<template>
  <!-- <div class="ct-container ct-container__has-topbar"> -->
  <div>
    <NavigationMainTopbar
      title="People"
    />
    <v-container>
<!--       <p>
        People list goes here
      </p>
      <p>
        <nuxt-link to="?aside=person/1">
          I'm person 1
        </nuxt-link>
        <nuxt-link to="?aside=person/3">
          I'm person 3
        </nuxt-link>
      </p>
 -->
      <v-row dense>
        <v-col
          v-for="(item, i) in people"
          :key="i"
          cols="6"
          lg="4"
        >
          <nuxt-link to="?aside=person/1">
            <!-- I'm person 1 -->
            <PersonCard />
          </nuxt-link>
        </v-col>
      </v-row>

<!--      <v-virtual-scroll
        height="1200"
        :item-height="itemHeigth"
        bench="3"
        :items="people"
      >
        <template #default="{ item }">
          <v-row dense>
            <v-col
              v-for="person in item"
              :key="person.id"
              cols="6"
              lg="4"
            >
              <PersonCard />
            </v-col>
          </v-row>
        </template>
      </v-virtual-scroll> -->
    </v-container>
  </div>
</template>

<script>

// function makeRows (list, cols) {
//   const rows = []

//   for (let i = 0; i < list.length; i += cols) {
//     const row = []

//     // Add next N elements to the row
//     for (let j = 0; j < cols; j += 1) {
//       row.push(list[i + j])
//     }

//     // And add the row to the list
//     rows.push(row)
//   }

//   return rows
// }

export default {
  fetch () {
    return this.$store.dispatch('people/list')
  },
  head: {
    title: 'People',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'All the people in your directory'
      }
    ]
  },
  computed: {
    people () {
      // return this.$store.state.people.list
      const n = 10
      return this.$store.state.people.list.slice(0, n)
      // const cols = this.$vuetify.breakpoint.mdAndDown ? 2 : 3
      // return makeRows(this.$store.state.people.list, cols)
    },
    itemHeigth () {
      return 398
    }
  }
  // created () {
  //   this.$store.dispatch('people/list')
  // }
}
</script>

<style scoped>
.ct-container {
  height: 100vh;
  max-height: 100vh;
  overflow: auto;
}
  .ct-container__has-topbar {
    padding-top: 64px;
  }
</style>
