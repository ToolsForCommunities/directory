<template>
  <div>
    <NavigationMainTopbar
      title="More"
    />
    <v-container class="pa-0">
      <!-- profile -->
      <!-- <div>
      <div>
        <v-avatar size="36px">
          <img
            alt="Avatar"
            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
          >
        </v-avatar>
        <span>holi</span>
      </div>
      <v-col class="text-center">
        <CTButton
          @click="$store.dispatch('auth/logout')"
        >
          Logout
        </CTButton>
        <nuxt-link
          to="login"
        >
          Login
        </nuxt-link>
      </v-col>
    </div> -->
      <!-- /profile -->

      <!-- <v-divider class="mb-4" /> -->

      <!-- FAQ -->
      <div class="mx-4 mt-4 mb-6">
        <div class="d-flex flex-column">
          <span class="title">FAQ</span>
          <span class="subtitle-1">Frequent asked questions</span>
        </div>
        <v-expansion-panels
          v-model="panel"
          multiple
          accordion
          class="mt-3"
        >
          <!--
          <v-expansion-panel expand>
            <v-expansion-panel-header
              class="subtitle-1"
            >
              Privacy
            </v-expansion-panel-header>
            <v-expansion-panel-content>

            </v-expansion-panel-content>
          </v-expansion-panel>
          -->
          <!--
          <v-expansion-panel>
            <v-expansion-panel-header
              class="subtitle-1"
            >
              Where's my profile?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>
                Profiles are mantained by a space manager. You can manually add or update your profile or
                your startup info by filling <a href="/admin/#/suggest-public" target="_blank">this form</a>.
              </p>
              <p>
                Your changes will be manually reviewd and updated as soon as possible.
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel> -->

          <!-- <v-expansion-panel>
            <v-expansion-panel-header
              class="subtitle-1"
            >
              Editing my profile
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              Some content
            </v-expansion-panel-content>
          </v-expansion-panel> -->

          <!-- Standard FAQ -->
          <v-expansion-panel
            v-for="(item, i) in items"
            :key="i"
          >
            <v-expansion-panel-header
              class="subtitle-1"
            >
              {{ item.title }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div v-html="item.text" />
              <!-- {{ item.answer }} -->
            </v-expansion-panel-content>
          </v-expansion-panel>

          <!-- Custom FAQ -->
          <v-expansion-panel
            v-for="item in faq"
            :key="item.id"
          >
            <v-expansion-panel-header
              class="subtitle-1"
            >
              {{ item.question }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div v-html="item.answer" />
              <!-- {{ item.answer }} -->
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <!-- /FAQ -->

      <v-divider class="mb-4" />

      <!-- About -->
      <div class="mx-4">
        <div class="d-flex flex-column">
          <span class="title">About</span>
          <div v-if="isGfs" class="body">
            <p>
              This directory is part of Google for Startups &amp;
              <a href="http://communitytools.co/" target="blank">Community Tools</a>, a project
              created to facilitate contacts across Google for Startups Campus communities.
            </p>
            <p>
              If you want to share your thoughts, report a bug or just say hi, you can get in
              touch by clicking <a :href="supportHref" target="blank">here</a>.
              We'd love to hear whatever's on your mind!
            </p>
          </div>
          <span v-else class="body">
            <p>
              This directory is part of
              <span v-if="companyName">{{ companyName }} &amp; </span>
              <a href="http://communitytools.co/" target="blank">Community Tools</a>, a project
              created to facilitate contacts across communities.
            </p>
            <p>
              If you want to share your thoughts, report a bug or just say hi, you can get in
              touch by clicking <a :href="supportHref" target="blank">here</a>.
              We'd love to hear whatever's on your mind!
            </p>
          </span>
        </div>
      </div>
    <!-- /About -->
    </v-container>

    <v-footer padless class="mb-16 mb-md-2">
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Community Tools</strong>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data () {
    return {
      panel: [0],
      items: [
        {
          action: 'person',
          title: 'Profiles',
          text: "Profiles are mantained by a space manager. You can manually add or update your profile or your startup info by filling <a href='/admin/#/suggest-public'>this form</a>. Your changes will be manually reviewd and updated as soon as possible."
        },
        {
          action: 'lock',
          title: 'Privacy',
          text: `
            <h4>What's beeing tracked?</h4>
            <p>Users data is securely stored in Google's infrastructure in Europe under the best standards. Every action in this site is 100% anonymous. To do so, we use third party cookies.</p>
            <br>
            <h4>What's a cookie?</h4>
            <p>A cookie is a file that is downloaded to your computer when you access certain web pages. Cookies allow a web page, among other things, to store and retrieve information about the browsing habits of a user or their equipment and, depending on the information they contain and the way they use their equipment, they can be used to recognize the user.</p><br>
            <h4>What types of cookies does this website use?</h4>
            <p>Google Analytics: Analytic cookies, are those that are well treated by us or by third parties, allow us to quantify the number of users and thus carry out the measurement and statistical analysis of the use made by users of the service offered.<br>For this, their browsing is analyzed in our website in order to improve the products or services that we offer you.</p>
            <p><a href="https://policies.google.com/technologies/cookies" target="
              ">More information about Google cookies</a>.</p>
            <br>

            <h4>Revocation and elimination of cookies</h4>
            <p>You can allow, block or delete the cookies installed on your computer by configuring the browser options installed on your computer.</p>`
          // text: "Users data is securely stored in Google's infrastructure in Europe under the best standards. Every action in this site is 100% anonymous. We do not collect info about you and do not track you in any creepy way.",
        }
      ]
    }
  },
  fetch () {
    return this.$store.dispatch('faq/list')
  },
  head: {
    title: 'FAQ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Get answer to every single question about your community'
      }
    ]
  },
  computed: {
    faq () {
      return this.$store.state.faq.list
    },
    isGfs () {
      if (!process.browser) {
        return false
      }

      const gfsDomain = 'gfs.directory'
      const host = location ? location.hostname : ''
      return host.includes(gfsDomain)
    },
    companyName () {
      return this.$settings.companyName
    },
    supportHref () {
      return `mailto:${process.env.VUE_APP_SUPPORT_EMAIL}`
    }
  }
}
</script>
