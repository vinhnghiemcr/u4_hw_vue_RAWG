<template>
  <div id="app">
    <header>
      <!-- Nav Goes Here -->
      <Nav />
    </header>
    <main>
      <!-- Router View Goes Here -->
      <router-view />
    </main>
  </div>
</template>

<script>
import Nav from './components/Nav'
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>
