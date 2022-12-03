<template >

  <section class="src-components-header">
    <div class="header" :style='" background : "+ $store.state.headerStyle'>
      <h1>The Great <br>
			<span>{{$store.state.colorDisplay}}</span>
			<br>
			Guessing Game</h1>
    </div>
    
  </section>

</template>

<script>

  export default  {
    name: 'src-components-header',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .header {
	transition: all 0.3s;
	text-transform: uppercase;
	text-align: center;
	margin: 0;
	color: white;
	
}
</style>
