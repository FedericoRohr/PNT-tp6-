<template>
  <div id="app">  
    <div>
    <Header/>
    <Navigator/>
    <Container/>
    </div>
     
  </div>
</template>

<script>
import Navigator from './components/Navigator.vue'
import Header from './components/Header.vue'
import Container from './components/Container.vue'

export default {
  name: 'App',
  components: {
    Navigator,
    Header,
    Container
  }
}
</script>

<style>
body {
	background: #232323 !important;
}
</style>
