export default {
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
  },
  methods: {
    logAllCharacters () {
      console.log(this.characters)
    }
  }
}