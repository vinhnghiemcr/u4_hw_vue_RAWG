<template>
  <div id="app">
    <header>
      <!-- Nav Goes Here -->
      <NavBar />
    </header>
    <main>
      <!-- Router View Goes Here -->
      <router-view header="RAWG"></router-view>
    </main>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'

  export default {
    name: 'App',
    components: {
      NavBar
    }
  }
</script>