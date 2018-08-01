<template>
  <div>
    <v-card
      color="red"
      class="white--text"
    >
      <v-card-title
        class="headline"
      >
        Sith Lord
        <v-spacer/>
        {{ index }}
      </v-card-title>
      <v-card-actions>
        <v-layout row wrap>
          <v-flex xs12>
          Name: {{ character.name }}
          </v-flex>
          <v-flex xs12>
          Name of Evil Padawan: {{ character.padawanName }}
          </v-flex>
          <v-flex xs12>
          Mode of Death: {{ character.modeOfDeath }}
          </v-flex>
        </v-layout>
      </v-card-actions>
    </v-card>

  </div>
</template>
<script>
import CharacterProps from './characterProps.js'
export default {
  name: 'Sith',
  props: {
    ...CharacterProps
  }

}
</script>