<template lang="html">

  <section class="src-components-navigator">
    
    <br>
    <div id="navigator">
		<button @click="newGame()"> {{$store.state.messageDisplay}}</button>
		<span id="message">{{$store.state.messageDisplay2}}</span>
		<button @click="easy()" :class="[{ 'selected': !isHard}]">easy</button>
		<button @click="hard()" :class="[{ 'selected': isHard}]"> hard</button> 
    <br>

    
    
	</div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-navigator',
    components:{
    },
    props: [],
    mounted () {
     this.newGame()
    
    },
    data () {
      return {
        isHard:true,

      }
    },
    methods: {
      easy(){
      if (this.isHard) {
      this.isHard = false   
      this.$store.dispatch('setColorCount',3)
      this.newGame()
       }
     },
      hard(){
        if (!this.isHard) {
          this.isHard = true
          this.$store.dispatch('setColorCount',6)
          this.newGame()
       }
      },
      newGame(){
        this.$store.dispatch('setHeaderStyle','steelblue')
        this.$store.dispatch('setMessage','new Colors !')
        this.$store.dispatch('setMessage2','')
        this.$store.dispatch('setColors')
        this.$store.dispatch('setColorDisplay')
      },   
    },
     computed: {

     }
  }



</script>

<style scoped lang="css">
#navigator {
  background: #ffffff;
  height: 30px;
  text-align: center;
  margin: 0;
  margin-top: -30px;
}
.selected {
  background-color: steelblue;
  color: white;
}
button {
  border: none;
  background-color: white;
  font-family: "Montserrat", "Avenir";
  text-transform: uppercase;
  height: 100%;
  font-weight: 700;
  letter-spacing: 1px;
  color: steelblue;
  transition: all 0.3s;
  outline: none;
}
button:hover {
  color: white;
  background-color: steelblue;
}
#message {
	display: inline-block;
	width: 20%;
}

</style>
