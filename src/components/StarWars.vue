<template>
  <div>
    <v-layout row>
      <v-flex
        xs4
        offset-xs4
      >
        <v-flex
          text-xs-center
          class="display-2 my-5"
        >
          A Galaxy Far Far Away...
        </v-flex>
        <div
          v-for="(character, index) in characters"
          :key="character.name"
        >
          <component
            :is="character.type.toLowerCase()"
            :character="character"
            :index="index"
            class="my-3"
          />
        </div>
        <v-btn
          class="mb-5"
          @click="logAllCharacters"
        >
          Click To Log Characters To Console
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import jedi from './characters/jedi'
import sith from './characters/sith'
import wookie from './characters/wookie'
import porg from './characters/porg'
import ewok from './characters/ewok'
import CharactersMixin from './characters/charactersMixin'
export default {
  name: 'AGalaxyFarFaraway',
  mixins: [CharactersMixin],
  components: {
    jedi, sith, wookie, porg, ewok
  }
}
</script>
