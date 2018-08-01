<template>
  <v-app dark>
    <v-content>
      <a-galaxy-far-far-away/>
    </v-content>
    <v-footer :fixed="true" app>
      <span>Vue Meetup 8/1/2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import AGalaxyFarFarAway from './components/StarWars'

export default {
  data () {
    return {
      title: 'Dynamic Vue Components'
    }
  },
  name: 'App',
  components: {
    AGalaxyFarFarAway
  }
}
</script>
