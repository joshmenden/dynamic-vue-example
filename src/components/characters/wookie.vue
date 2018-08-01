<template>
  <div>
     <v-card
      color="brown"
      class="white--text"
    >
      <v-card-title
        class="headline"
      >
        Wookie
        <v-spacer/>
        {{ index }}
      </v-card-title>
      <v-card-actions>
        <v-layout align-center row wrap>
          <v-flex xs12>
            Name: {{ character.name }}
          </v-flex>
          <v-flex xs12>
            <img src="https://pbs.twimg.com/profile_images/951488916540010496/BLBRbbI2_400x400.jpg"/>
          </v-flex>
        </v-layout>
      </v-card-actions>
    </v-card>

  </div>
</template>
<script>
export default {
  name: 'Wookie',
  props: {
    character: {
      type: Object,
      default: () => {},
      required: true
    },
    index: {
      type: Number,
      default: 0,
      required: true
    }
  }

}
</script>
