<template>
  <div id="app">
    <header>
      <Nav />
    </header>
    <main>
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
