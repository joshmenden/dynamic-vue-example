<template>
  <div>
     <v-card
      color="brown lighten-3"
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
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/Wicket_W_Warrick.png/220px-Wicket_W_Warrick.png"/>
          </v-flex>
        </v-layout>
      </v-card-actions>
    </v-card>

  </div>
</template>
<script>
import CharacterProps from './characterProps.js'
export default {
  name: 'Ewok',
  props: {
    ...CharacterProps
  }

}
</script>