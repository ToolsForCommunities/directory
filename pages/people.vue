<template>
  <!-- <div class="ct-container ct-container__has-topbar"> -->
  <div>
    <NavigationMainTopbar
      title="People"
    />
    <v-container>
      <v-sheet>
        <v-chip-group
          multiple
          active-class="primary--text"
        >
          <v-chip @click="$store.dispatch('aside/set', 'filters')">
            All filters
          </v-chip>
          <v-chip
            v-for="tag in tags"
            :key="tag.id"
          >
            {{ tag.name }}
          </v-chip>
        </v-chip-group>
      </v-sheet>
      </v-row>

      <v-row dense>
        <v-col
          v-for="person in people"
          :key="person.id"
          cols="6"
          lg="4"
        >
          <PersonCard
            v-bind="person"
            :startup="person.Group && person.Group[0]"
          />
        </v-col>
      </v-row>

      <!-- Infinite scroll dispatcher -->
      <div v-intersect="infiniteScrolling" class="py-4" />

      <!--
      <v-virtual-scroll
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
  data: () => ({
    // dummy
    // tags: [
    //   'All filters',
    //   'Developer',
    //   'Sales',
    //   'Marketing',
    //   'Founder',
    //   'Designer',
    //   'Talent',
    //   'Growth',
    //   'Cloud'
    // ],
    // dummy
    itemsToShow: 12
  }),
  fetch () {
    return Promise.all([
      this.$store.dispatch('tag/list'),
      this.$store.dispatch('people/list')
    ])
    // return this.$store.dispatch('people/list')
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
    tags () {
      return this.$store.state.tag.list || []
    },
    people () {
      if (this.itemsToShow === this.$store.state.people.list.length) {
        return this.$store.state.people.list
      }

      return this.$store.state.people.list.slice(0, this.itemsToShow)
    },
    itemHeigth () {
      return 398
    }
  },
  methods: {
    infiniteScrolling () {
      const itemsToAdd = 9

      if (this.itemsToShow === this.$store.state.people.list.length) {
        return false
      } else if (this.itemsToShow + itemsToAdd >= this.$store.state.people.list.length) {
        this.itemsToShow = this.$store.state.people.list.length
      } else {
        this.itemsToShow += itemsToAdd
      }

      return true
    }
  }
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

>>> .v-slide-group__prev--disabled,
>>> .v-slide-group__next--disabled {
  display: none;
}
</style>
