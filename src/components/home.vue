<template>
  <b-container>
    <div class="home">
      <header>
        <h1 class="title">STAR WARS</h1>
        <p class="subtitle">Choose a category</p>
      </header>

      <b-list-group>
        <b-list-group-item class="item">
          <router-link
            :to="{ path: '/search', query: { category: 'people' } }"
            class="link"
            >People</router-link
          >
        </b-list-group-item>
        <b-list-group-item class="item">
          <router-link
            :to="{ path: '/search', query: { category: 'planets' } }"
            class="link"
            >Planets</router-link
          >
        </b-list-group-item>
        <b-list-group-item class="item">
          <router-link
            :to="{ path: '/search', query: { category: 'starships' } }"
            class="link"
            >Starships</router-link
          >
        </b-list-group-item>
        <b-list-group-item class="item">
          <router-link
            :to="{ path: '/search', query: { category: 'vehicles' } }"
            class="link"
            >Vehicles</router-link
          >
        </b-list-group-item>
        <b-list-group-item class="item">
          <router-link
            :to="{ path: '/search', query: { category: 'films' } }"
            class="link"
            >Films</router-link
          >
        </b-list-group-item>
        <b-list-group-item class="item">
          <router-link
            :to="{ path: '/search', query: { category: 'species' } }"
            class="link"
            >Species</router-link
          >
        </b-list-group-item>
      </b-list-group>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "home",
};
</script>

<style scoped>
.item {
  background: transparent;
  font-size: 2em;
}

.link {
  color: yellow;
  text-decoration: none;
}

.subtitle {
  font-size: 1.5em;
  text-transform: uppercase;
}
</style>
