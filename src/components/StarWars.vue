<template>
  <div>
    <div
      v-for="character in characters"
      :key="character.name"
    >
      <component
        :is="character.type.toLowerCase()"
      />
    </div>
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
        { name: 'Luke Skywalker', type: 'Jedi', age: 55 }
      ]
    }
  }
}
</script>
