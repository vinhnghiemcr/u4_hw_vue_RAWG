<template>
  <div>
    <div class="search">
      <h2>Search Results</h2>
      <section class="search-results container-grid"></section>
    </div>

    <div class="genres">
      <h2>Genres</h2>
      <section class="container-grid"></section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    genres: [],
    searchQuery: '',
    searchResults: [],
    searched: false
  }),
  mounted() {},
  methods: {
    async getGenres() {},
    async getSearchResults(e) {
      e.preventDefault()
    },
    handleChange(event) {
      console.log(event)
    }
  }
}
</script>
