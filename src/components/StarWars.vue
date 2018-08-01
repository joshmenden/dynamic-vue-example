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
          <jedi
            v-if="character.type.toLowerCase() === 'jedi'"
            :character="character"
            :index="index"
            class="my-3"
          />
          <sith
            v-if="character.type.toLowerCase() === 'sith'"
            :character="character"
            :index="index"
            class="my-3"
          />
          <wookie
            v-if="character.type.toLowerCase() === 'wookie'"
            :character="character"
            :index="index"
            class="my-3"
          />
          <ewok
            v-if="character.type.toLowerCase() === 'ewok'"
            :character="character"
            :index="index"
            class="my-3"
          />
          <porg
            v-if="character.type.toLowerCase() === 'porg'"
            :character="character"
            :index="index"
            class="my-3"
          />
        </div>
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
export default {
  name: 'AGalaxyFarFaraway',
  components: {
    jedi, sith, wookie, porg, ewok
  },
  data () {
    return {
      characters: [
        { type: 'Jedi', name: 'Luke Skywalker', saberColor: 'blue', wiseQuote: 'Amazing...Every Word of What You Just Said Was Wrong.' },
        { name: 'Chewbacca', type: 'Wookie' },
        { type: 'Sith', name: 'Darth Sidious', padawanName: 'Anakin', modeOfDeath: 'Did he though?' },
        { type: 'Jedi', name: 'Yoda', saberColor: 'green', wiseQuote: 'Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.'},
        { type: 'Jedi', name: 'Obi-Wan Kenobi', saberColor: 'blue', wiseQuote: 'Only a Sith deals in absolutes!'},
        { name: 'Ethan', type: 'Ewok' },
        { name: 'Penny', type: 'Porg' },
        { type: 'Sith', name: 'Supreme Leader Snoke', padawanName: 'Kylo Ren', modeOfDeath: 'Cut sideways by a lightsaber.' },
        { name: 'Paul', type: 'Porg' },
        { name: 'Wallace', type: 'Wookie' },
      ]
    }
  }
}
</script>
