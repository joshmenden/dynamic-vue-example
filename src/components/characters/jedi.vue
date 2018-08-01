<template>
  <div>
    <v-card
      color="cyan lighten-3"
      class="black--text"
    >
      <v-card-title
        class="headline"
      >
        Jedi
        <v-spacer/>
        {{ index }}
      </v-card-title>
      <v-card-actions>
        <v-layout row wrap>
          <v-flex xs12>
          Name: {{ character.name }}
          </v-flex>
          <v-flex xs12>
          Light Saber Color: {{ character.saberColor }}
          </v-flex>
          <v-flex xs12>
          Quote: {{ character.wiseQuote }}
          </v-flex>
        </v-layout>
      </v-card-actions>
    </v-card>

  </div>
</template>
<script>
export default {
  name: 'Jedi',
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

