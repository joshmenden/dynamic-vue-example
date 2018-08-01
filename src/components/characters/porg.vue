<template>
  <div>
     <v-card
      color="brown lighten-5"
      class="black--text"
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
            <img
              src="https://i.kinja-img.com/gawker-media/image/upload/s--f97z3L6z--/c_scale,f_auto,fl_progressive,q_80,w_800/b5caoix6cf6wwqe6oda1.jpg"
              style="max-width:500px;"
            />
          </v-flex>
        </v-layout>
      </v-card-actions>
    </v-card>

  </div>
</template>
<script>
export default {
  name: 'Porg',
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