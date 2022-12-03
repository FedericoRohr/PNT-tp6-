<template>
  <section class="src-components-container">
    <div id="container">
      <div v-for="(square, index) in $store.state.colors" :key="index">
        <div
          class="square"
          @click="comparar(square, index)"
          :style="'backgroundColor:' + $store.state.colors[index]"
        ></div>
      </div>
    </div>

    <br />
  </section>
</template>

<script>
export default {
  name: "src-components-container",
  props: [],
  mounted() {},
  data() {
    return {
    };
  },
  methods: {
    comparar(square, index) {
      if (square == this.getColorDisplay) {
        console.log("gano");
        this.winGame()
        this.$forceUpdate();
      } else {
        console.log("siga intentando");
        this.tryAgain(index)
        this.$forceUpdate();
      }
    },
    winGame() {
      let colorSelected = this.$store.state.colorDisplay;
      this.$store.dispatch("setMessage", "play again !");
      this.$store.dispatch("setMessage2", "You Picked Right!");
      this.$store.dispatch("setAllColors", colorSelected);
      this.$store.dispatch("setHeaderStyle", colorSelected);
    },
    tryAgain(index) {
      this.$store.dispatch("setMessage2", "Try Again!");
      this.$store.dispatch("setColor", index, "#232323");
    },
  },
  computed: {
    getColorDisplay(){
      return this.$store.state.colorDisplay
    }
  },
};
</script>

<style scoped lang="css">
.square {
  width: 30%;
  background: blue;
  padding-bottom: 30%;
  float: left;
  margin: 1.66%;
  border-radius: 10%;
  transition: background 0.8s;
  -webkit-transition: background 0.8s;
  -moz-transition: background 0.8s;
}
#container {
  margin: 20px auto;
  max-width: 600px;
}
</style>
